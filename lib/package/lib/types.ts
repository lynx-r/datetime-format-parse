export type InputDate = Date | string | number | BigInt | null | undefined;

export type FormatParams =
  | string
  | { formatPattern: string; complementTime: boolean };

export type ParseParams = { complementTime: boolean };

export type Format = Record<string, FormatParams>;

export type Config = {
  format: Format;
  constants: {
    TZ: string;
  };
};

export type Formatter<T extends Format> = {
  [k in keyof T]: (datetime: InputDate) => string;
};

export interface CreateFormatterFn {
  <T extends Config>(config: T): Formatter<T["format"]>;
}
