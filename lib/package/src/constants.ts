import config from "config";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { IClientFormats, IServerFormats } from "./types";

export const TZ_MSK = config.get("constants.TZ_MSK") as string;

export const TZ_MSK_UTC_HOURS = formatInTimeZone(new Date(), TZ_MSK, "XXX");

export const SERVER_DATE_FORMAT = config.get("SERVER_DATE_FORMAT") as string;
// 2023-07-19T01:21:15+03:00
export const SERVER_DATETIME_FORMAT =
  (config.get("SERVER_DATETIME_FORMAT") as string) + TZ_MSK_UTC_HOURS;
export const ISO_DATETIME_FORMAT = config.get("ISO_DATETIME_FORMAT") as string;

export const clientFormats: IClientFormats = config.get("format.client");
export const serverFormats: IServerFormats = config.get("serverFormats");

export const VALID_CLIENT_FORMATS = Object.values(clientFormats);
export const VALID_SERVER_FORMATS = Object.values(serverFormats);

export const CREATE_INVALID_DATE = new Date(NaN);
