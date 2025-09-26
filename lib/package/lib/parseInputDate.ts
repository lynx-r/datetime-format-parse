import { isMatch, isValid as isValidDate, parse } from "date-fns";

import { toZonedTime } from "date-fns-tz/toZonedTime";
import { set } from "date-fns/set";
import { INVALID_DATE } from "./constants";
import { Config, Format, InputDate, ParseParams } from "./types";

/**
 * @return a timezone of a current client
 */
export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

const parseInputDate = (
  date: InputDate,
  config: Config,
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
    dateObject = parseValidFormat(date, parseParams, config);
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

const parseValidFormat = (
  date: string,
  parseParams: ParseParams,
  config: Config
): Date => {
  const formats = config["format"] as Format;
  const validFormats = Object.values(formats).map((fmt) =>
    typeof fmt === "object" ? fmt.formatPattern : fmt
  );
  const clientFormat = validFormats.find((fmt) => isMatch(date, fmt));
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

export default parseInputDate;
