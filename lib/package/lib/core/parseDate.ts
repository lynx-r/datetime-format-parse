import { isMatch, isValid as isValidDate, parse } from "date-fns";

// import { toZonedTime } from "date-fns-tz/toZonedTime";
import { toZonedTime } from "date-fns-tz/toZonedTime";

import { INVALID_DATE } from "../constants";
import { Config, InputDate } from "../types";

/**
 * @return a timezone of a current client
 */
export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

const parseDate = (date: InputDate, config: Config): Date => {
  if (date === null || date === undefined) {
    return INVALID_DATE;
  }
  let dateObject;
  dateObject = parseValidFormat(date, config);
  if (!isValidDate(dateObject)) {
    return INVALID_DATE;
  }
  // переводим dateObject на время эквивалентное UTC. То есть если распарсилось время в 12:21, то
  // это время переводится в UTC, как будто оно было в ЧП МСК, то есть на 3 часа назад – в 09:21.
  // используется для установки времени (часы:минуты) при форматировании, так как там просто берется
  // время и дата Date и форматируется в указанном ЧП, при этом ЧП Date никак не учитывается.
  return toZonedTime(dateObject, getTimezone());
};

const parseValidFormat = (date: InputDate, config: Config): Date => {
  let dateObject;

  if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (typeof date === "string") {
    dateObject = parseDateString(config, date);
  } else {
    return INVALID_DATE;
  }

  return dateObject;
};

function parseDateString(config: Config, date: string) {
  const clientFormat = Object.values(config.formats).find((fmt) => {
    return isMatch(date, fmt);
  });

  let dateObject;
  if (clientFormat) {
    dateObject = parse(date, clientFormat, new Date());
  } else {
    dateObject = parse(date, config.constants.serverFormat, new Date());
  }
  return dateObject;
}

export default parseDate;
