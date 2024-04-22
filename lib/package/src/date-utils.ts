import {
  isMatch,
  isValid,
  isValid as isValidDate,
  parse,
  parseISO,
} from "date-fns";
import { formatInTimeZone, zonedTimeToUtc } from "date-fns-tz";

import {
  ISO_DATETIME_FORMAT,
  SERVER_DATETIME_FORMAT,
  SERVER_DATE_FORMAT,
  TZ_MSK,
  TZ_MSK_UTC_HOURS,
  VALID_CLIENT_FORMATS,
} from "./constants";
import {
  TDateClientFormat,
  TDateServerISOFormat,
  TFormatOptions,
  TInputDate,
} from "./types";

export const createInvalidDate = () => new Date(NaN);

export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

export const parseInputDate = (date: TInputDate): Date => {
  if (date === null || date === undefined) {
    return createInvalidDate();
  }
  let dateObject;
  if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (typeof date === "string") {
    dateObject = parseDateString(date);
  } else {
    return createInvalidDate();
  }
  if (!isValidDate(dateObject)) {
    return createInvalidDate();
  }
  return dateObject;
};

const parseDateString = (date: string): Date => {
  // for (let fmt of VALID_CLIENT_FORMATS) {
  //   console.log(isMatch(date, fmt));
  // }
  const clientFormat = VALID_CLIENT_FORMATS.find((fmt) => isMatch(date, fmt));
  if (clientFormat) {
    const dateObject = parse(date, clientFormat, new Date());
    // переводим dateObject на время эквивалентное UTC. То есть если распарсилось время в 12:21, то
    // это время переводится в UTC, как будто оно было в ЧП МСК, то есть на 3 часа назад в 09:21
    // нужно для установки нужного времени (часы:минуты) при форматировании, так как там просто берется
    // время и дата Date и форматируется в нужном ЧП, при этом ЧП Date никак не учитывается.
    return zonedTimeToUtc(dateObject, TZ_MSK);
  }

  if (isMatch(date, SERVER_DATE_FORMAT)) {
    date += `T00:00:00${TZ_MSK_UTC_HOURS}`;
  }

  if (isMatch(date, ISO_DATETIME_FORMAT)) {
    return parseISO(date);
  }

  return createInvalidDate();
};

export const formatDatetimeHelper = (
  date: TInputDate,
  formatOptions: TFormatOptions
): string => {
  const { side, toClientFormat, toServerFormat } = formatOptions;
  switch (side) {
    // форматируем из серверной даты для компонента
    case "server": {
      if (!toClientFormat) {
        throw new Error("toClientFormat must be specified");
      }
      const dateObject = parseInputDate(date);
      if (!isValid(dateObject)) {
        return "";
      }
      return formatClient(dateObject, toClientFormat);
    }
    // форматируем из даты компонента для сервера
    case "client": {
      if (!toServerFormat) {
        throw new Error("toServerFormat must be specified");
      }
      const dateObject = parseInputDate(date);
      if (!isValid(dateObject)) {
        return "";
      }
      return formatServer(dateObject, toServerFormat);
    }
  }
};

const formatServer = (date: Date, formatType: TDateServerISOFormat): string => {
  switch (formatType) {
    case "complete":
      return formatInTimeZone(date, TZ_MSK, SERVER_DATETIME_FORMAT);
    case "date":
      return formatInTimeZone(date, TZ_MSK, SERVER_DATE_FORMAT);
  }
};

const formatClient = (date: Date, formatType: TDateClientFormat): string => {
  return formatInTimeZone(date, TZ_MSK, formatType);

  // switch (formatType) {
  //   case "date":
  //     return formatInTimeZone(date, TZ_MSK, DATE_FORMAT);
  //   case "date-2":
  //     return formatInTimeZone(date, TZ_MSK, DATE_2_FORMAT);
  //   case "datetime":
  //     return formatInTimeZone(date, TZ_MSK, DATETIME_FORMAT);
  //   case "datetime-at":
  //     return formatInTimeZone(date, TZ_MSK, DATETIME_AT_FORMAT);
  //   case "datetime-with-tz":
  //     return formatInTimeZone(date, TZ_MSK, DATETIME_WITH_TZ_MSK_FORMAT);
  //   case "datetime-at-with-tz":
  //     return formatInTimeZone(date, TZ_MSK, DATETIME_WITH_TZ_AT_MSK_FORMAT);
  // }
};
