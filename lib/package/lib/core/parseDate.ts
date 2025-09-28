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
  if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === "number") {
    dateObject = new Date(date);
  } else if (typeof date === "string") {
    dateObject = parseValidFormat(date, config);
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

const parseValidFormat = (date: string, config: Config): Date => {
  const clientFormat = Object.values(config.formats).find((fmt) => {
    if (typeof fmt === "object") {
      return isMatch(date, fmt.pattern);
    }
    return isMatch(date, fmt);
  });

  if (clientFormat) {
    // let withNowTimeForDate = false;
    let pattern = "";
    if (typeof clientFormat === "object") {
      //   withNowTimeForDate = clientFormat.withNowTimeForDate;
      pattern = clientFormat.pattern;
    } else {
      pattern = clientFormat;
    }
    let parsedDate = parse(date, pattern, new Date());

    // if (withNowTimeForDate) {
    //   const now = new Date();
    //   parsedDate = set(parsedDate, {
    //     hours: now.getHours(),
    //     minutes: now.getMinutes(),
    //     seconds: now.getSeconds(),
    //     milliseconds: now.getMilliseconds(),
    //   });
    // }

    return parsedDate;
  }

  return INVALID_DATE;
};

export default parseDate;
