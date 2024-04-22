import schema from "../../../config/default.json";

import {
  DATETIME_FORMAT,
  DATETIME_WITH_TZ_AT_MSK_FORMAT,
  DATETIME_WITH_TZ_MSK_FORMAT,
  DATE_2_FORMAT,
  DATE_FORMAT,
} from "./constants";

// client-short | client-short-at | server-not-iso…
// translate – дату клиента не зависимо от ЧП и форматируем в ISO ЧП МСК
export type TDateSide = "client" | "server";
export type TDateClientFormat = string;
export type TDateServerISOFormat = "complete" | "date";

export type TInputDate = Date | string | number | null | undefined;
export type TFormattedDate = string;

export type TDateClientStringFormat =
  | typeof DATE_FORMAT
  | typeof DATE_2_FORMAT
  | typeof DATETIME_FORMAT
  | typeof DATETIME_WITH_TZ_MSK_FORMAT
  | typeof DATETIME_WITH_TZ_AT_MSK_FORMAT;

export type TFormatOptions = {
  side: TDateSide;
  toClientFormat?: string;
  toServerFormat?: TDateServerISOFormat;
};

export type ITimeFormat = (typeof schema)["timeFormatFunctions"];
export type ITimeFormatFunction = {
  [k in keyof ITimeFormat]: (datetime: TInputDate) => string;
};
