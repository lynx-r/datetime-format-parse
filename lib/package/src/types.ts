import schema from "../../../config/default.json";

export type TInputDate = Date | string | number | null | undefined;

export type ITimeFormat = (typeof schema)["timeFormatFunctions"];
export type ITimeFormatFunction = {
  [k in keyof ITimeFormat]: (datetime: TInputDate) => string;
};
