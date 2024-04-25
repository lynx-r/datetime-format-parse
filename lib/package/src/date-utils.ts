import {
  isMatch,
  isValid,
  isValid as isValidDate,
  parse,
  parseISO,
} from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import {
  CREATE_INVALID_DATE as INVALID_DATE,
  ISO_DATETIME_FORMAT,
  SERVER_DATE_FORMAT,
  TZ_MSK,
  TZ_MSK_UTC_HOURS,
  VALID_CLIENT_FORMATS,
} from "./constants";
import { TInputDate } from "./types";

export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

export const parseInputDate = (date: TInputDate): Date => {
  if (date === null || date === undefined) {
    return INVALID_DATE;
  }
  let dateObject;
  if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (typeof date === "string") {
    dateObject = parseValidFormat(date);
  } else {
    return INVALID_DATE;
  }
  if (!isValidDate(dateObject)) {
    return INVALID_DATE;
  }
  // переводим dateObject на время эквивалентное UTC. То есть если распарсилось время в 12:21, то
  // это время переводится в UTC, как будто оно было в ЧП МСК, то есть на 3 часа назад – в 09:21.
  // используется для установки времени (часы:минуты) при форматировании, так как там просто берется
  // время и дата Date и форматируется в указанном ЧП, при этом ЧП Date никак не учитывается.
  return toZonedTime(dateObject, getTimezone());
};

const parseValidFormat = (date: string): Date => {
  const clientFormat = VALID_CLIENT_FORMATS.find((fmt) => isMatch(date, fmt));
  if (clientFormat) {
    return parse(date, clientFormat, new Date());
  }

  return INVALID_DATE;
};

const parseDateString = (date: string): Date => {
  // for (let fmt of VALID_CLIENT_FORMATS) {
  //   console.log(isMatch(date, fmt));
  // }

  if (isMatch(date, SERVER_DATE_FORMAT)) {
    date += `T00:00:00${TZ_MSK_UTC_HOURS}`;
  }

  if (isMatch(date, ISO_DATETIME_FORMAT)) {
    return parseISO(date);
  }

  return INVALID_DATE;
};

export const formatDatetimeHelper = (
  date: TInputDate,
  format: string
): string => {
  const dateObject = parseInputDate(date);
  if (!isValid(dateObject)) {
    return "";
  }
  return formatInTimeZone(dateObject, TZ_MSK, format);
};
