import schema from "../../../config/default.json";

export type InputDate = Date | string | number | BigInt | null | undefined;

export type FormatParams =
  | string
  | { formatStr: string; complementTime: boolean };

export type ParseParams = { complementTime: boolean };

export type Format = Record<string, FormatParams>;

export type Formats = (typeof schema)["format"];

type BaseFormatter<T> = {
  [k in keyof T]: (datetime: InputDate) => string;
};

export type Formatter = BaseFormatter<Formats>;
