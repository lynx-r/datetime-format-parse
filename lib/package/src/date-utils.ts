import { isMatch, isValid, isValid as isValidDate, parse } from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import { set } from "date-fns/set";
import { INVALID_DATE, PIVOT_TZ, VALID_FORMATS } from "./constants";
import { FormatParams, InputDate, ParseParams } from "./types";

/**
 * @return a timezone of a current client
 */
export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

export const parseInputDate = (
  date: InputDate,
  parseParams: ParseParams = { complementTime: false }
): Date => {
  if (date === null || date === undefined) {
    return INVALID_DATE;
  }
  let dateObject;
  if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (typeof date === "string") {
    dateObject = parseValidFormat(date, parseParams);
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

const parseValidFormat = (date: string, parseParams: ParseParams): Date => {
  const clientFormat = VALID_FORMATS.find((fmt) => isMatch(date, fmt));
  if (clientFormat) {
    const { complementTime } = parseParams;
    let parsedDate = parse(date, clientFormat, new Date());

    if (complementTime) {
      const now = new Date();
      parsedDate = set(parsedDate, {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        milliseconds: now.getMilliseconds(),
      });
    }

    return parsedDate;
  }

  return INVALID_DATE;
};

const parseDateString = (date: string): Date => {
  // for (let fmt of VALID_CLIENT_FORMATS) {
  //   console.log(isMatch(date, fmt));
  // }

  // if (isMatch(date, SERVER_DATE_FORMAT)) {
  //   date += `T00:00:00${PIVOT_TZ_UTC_HOURS}`;
  // }

  // if (isMatch(date, ISO_DATETIME_FORMAT)) {
  //   return parseISO(date);
  // }

  return INVALID_DATE;
};

export const formatDatetimeHelper = (
  date: InputDate,
  format: FormatParams
): string | null => {
  let formatStr,
    complementTime = false;
  if (typeof format === "object") {
    formatStr = format.formatStr;
    complementTime = format.complementTime;
  } else {
    formatStr = format;
  }
  const parseParams = { complementTime };
  const dateObject = parseInputDate(date, parseParams);

  if (!isValid(dateObject)) {
    return null;
  }
  return formatInTimeZone(dateObject, PIVOT_TZ, formatStr);
};
