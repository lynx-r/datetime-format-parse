import { format } from "date-fns-tz/format";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import { set } from "date-fns/set";
import { PIVOT_TZ } from "../src/constants";
import { getTimezone } from "../src/date-utils";
import {
  DATETIME_STR,
  DATETIME_STR_MIDNIGHT,
  ISO_DATETIME_FORMAT,
} from "./constants";

/**
 * @param date date string
 * @param format format string. Default is ISO format
 * @param tz timezone. Default is client timezone
 */
export const getCorrectFormat = (
  date: string,
  format = ISO_DATETIME_FORMAT,
  tz = getTimezone()
) => {
  const zonedTime = toZonedTime(new Date(date), tz);

  return formatInTimeZone(zonedTime, PIVOT_TZ, format);
};

export const getDatetimeStr = (offset: string) => `${DATETIME_STR}${offset}`;

export const getDatetimeWithMidnightTimeStr = (offset: string) =>
  `${DATETIME_STR_MIDNIGHT}${offset}`;

export const getDatetimeWithCurrentTimeStr = (offset: string) => {
  const now = new Date();
  let parsedDate = new Date(DATETIME_STR_MIDNIGHT);

  parsedDate = set(parsedDate, {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    milliseconds: now.getMilliseconds(),
  });
  const datetimeInSystem = format(parsedDate, ISO_DATETIME_FORMAT);
  const datetimeWithCurrentTime = datetimeInSystem.split("+").at(0) + offset;
  return datetimeWithCurrentTime;
};
