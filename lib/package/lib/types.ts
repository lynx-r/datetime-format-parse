export type InputDate = Date | string | number | null | undefined;

export type ParseParams = { complementTime: boolean };

// pattern of formating
export type FormatPattern =
  | string
  | { pattern: string; complementTime: boolean };

// A record of function name / format pattern
export type Format = Record<string, FormatPattern>;

// Defines formatter function
export type Formatter<T extends Format> = {
  [k in keyof T]: (datetime: InputDate) => string;
};

// Defines json config with formatters: function name /
export type Config = {
  format: Format;
  constants: {
    TZ: string;
  };
};

export interface CreateFormatterFn {
  <T extends Config>(config: T): Formatter<T["format"]>;
}
