import schema from "../../../config/default.json";

export type TInputDate = Date | string | number | null | undefined;

export type IClientFormats = (typeof schema)["format"]["client"];

type Format = (typeof schema)["format"];

type ClientDateFormats = Format["client"]["date"];
type ClientDatetimeFormats = Format["client"]["datetime"];

type ServerDateFormats = Format["server"]["date"];
type ServerDatetimeFormats = Format["server"]["datetime"];

type BaseFormatter<T> = {
  [k in keyof T]: (datetime: TInputDate) => string;
};

export type Formatter = {
  client: {
    date: BaseFormatter<ClientDateFormats>;
    datetime: BaseFormatter<ClientDatetimeFormats>;
  };
  server: {
    date: BaseFormatter<ServerDateFormats>;
    datetime: BaseFormatter<ServerDatetimeFormats>;
  };
};
