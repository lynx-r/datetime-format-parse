import schema from "../../../config/default.json";

export type TInputDate = Date | string | number | null | undefined;

export type FormatParams =
  | string
  | { formatStr: string; complementTime: boolean };

export type ParseParams = { complementTime: boolean };

export type Format = Record<string, FormatParams>;

export type Formats = (typeof schema)["format"];

type BaseFormatter<T> = {
  [k in keyof T]: (datetime: TInputDate) => string;
};

export type Formatter = BaseFormatter<Formats>;
