import config from "config";
import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import { ITimeFormat } from "./types";

export const TZ_MSK = config.get("TZ_MSK") as string;

export const DATE_2_FORMAT = config.get("DATE_2_FORMAT") as string;
export const DATE_FORMAT = config.get("DATE_FORMAT") as string;
export const DATETIME_FORMAT = config.get("DATETIME_FORMAT") as string;
export const DATETIME_AT_FORMAT = config.get("DATETIME_AT_FORMAT") as string;

export const DATETIME_WITH_TZ_MSK_FORMAT = config.get(
  "DATETIME_WITH_TZ_MSK_FORMAT"
) as string;

export const DATETIME_WITH_TZ_AT_MSK_FORMAT = config.get(
  "DATETIME_WITH_TZ_AT_MSK_FORMAT"
) as string;

export const VALID_CLIENT_FORMATS = [
  // DATE_2_FORMAT должен быть перед DATE_FORMAT
  DATE_2_FORMAT,
  DATE_FORMAT,
  DATETIME_FORMAT,
  DATETIME_AT_FORMAT,
  DATETIME_WITH_TZ_MSK_FORMAT,
  DATETIME_WITH_TZ_AT_MSK_FORMAT,
] as const;

export const TZ_MSK_UTC_HOURS = formatInTimeZone(new Date(), TZ_MSK, "XXX");

export const SERVER_DATE_FORMAT = config.get("SERVER_DATE_FORMAT") as string;
// 2023-07-19T01:21:15+03:00
export const SERVER_DATETIME_FORMAT =
  (config.get("SERVER_DATETIME_FORMAT") as string) + TZ_MSK_UTC_HOURS;
export const ISO_DATETIME_FORMAT = config.get("ISO_DATETIME_FORMAT") as string;

export const timeFormatFunctions: ITimeFormat = config.get(
  "timeFormatFunctions"
);
