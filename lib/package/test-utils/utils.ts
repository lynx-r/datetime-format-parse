import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import { getTimezone } from "../lib/core/parseDate";
import { config, DATETIME_STR, ISO_DATETIME_FORMAT } from "./constants";

/**
 * @param date date string
 * @param format format string. Default is ISO format
 * @param tz timezone. Default is client timezone
 */
export const getCorrectFormat = (
  date: string,
  format = ISO_DATETIME_FORMAT
) => {
  const zonedTime = toZonedTime(date, getTimezone());

  return formatInTimeZone(zonedTime, config.constants.TZ, format);
};

export const getIsoDateWithOffset = (offset: string) =>
  `${DATETIME_STR}${offset}`;
