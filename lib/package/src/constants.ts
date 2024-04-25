import config from "config";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { Formats } from "./types";

export const TZ_MSK = config.get("constants.TZ_MSK") as string;

export const TZ_MSK_UTC_HOURS = formatInTimeZone(new Date(), TZ_MSK, "XXX");

export const SERVER_DATE_FORMAT = config.get("SERVER_DATE_FORMAT") as string;
// 2023-07-19T01:21:15+03:00
export const SERVER_DATETIME_FORMAT =
  (config.get("SERVER_DATETIME_FORMAT") as string) + TZ_MSK_UTC_HOURS;
export const ISO_DATETIME_FORMAT = config.get("ISO_DATETIME_FORMAT") as string;

export const formats: Formats = config.get("format");
export const serverFormats: any = {};

export const VALID_FORMATS = Object.values(formats).map((fmt) =>
  typeof fmt === "object" ? fmt.formatStr : fmt
);

export const CREATE_INVALID_DATE = new Date(NaN);
