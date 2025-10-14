export type InputDate = Date | string | number | null | undefined;

export type ParseParams = { complementTime: boolean };

type KeyType = string | `${string}ToServer`;

// A record of function name / format pattern
export type Format = Record<KeyType, string>;

// Defines formatter function
export type FormatterToClient<T> = {
  [k in keyof T]: (datetime: InputDate) => string;
};

export type FormatterToServer<T> = {
  [k in keyof T as `${string & k}ToServer`]: (datetime: InputDate) => string;
};

export type Formatter<T> = FormatterToClient<T> & FormatterToServer<T>;

// Defines json config with formatters: function name /
export type Config = {
  formats: Format;
  constants: {
    // часовой пояс в котором должно форматироваться время
    // например если время в Europe/Paris, то TZ MSK сформатирует его в Московском
    TZ: string;
    // формат сервера из которого будем парсить и форматировать клиент
    serverFormat: string;
  };
};

export interface CreateFormatterFn {
  <T extends Config>(config: T): Formatter<T["formats"]>;
}
