import { clientFormats, serverFormats } from "./constants";
import { formatDatetimeHelper } from "./date-utils";
import { Formatter, TInputDate } from "./types";

const createFormatter = <T>(formats: Record<string, string>): T => {
  return Object.entries(formats).reduce((acc, [formatName, formatStr]) => {
    return {
      ...acc,
      [formatName]: (datetime: TInputDate) => {
        const r = formatDatetimeHelper(datetime, formatStr);
        return r;
      },
    };
  }, {} as T);
};

const formatter: Formatter = {
  client: {
    date: createFormatter<Formatter["client"]["date"]>(clientFormats.date),
    datetime: createFormatter<Formatter["client"]["datetime"]>(
      clientFormats.datetime
    ),
  },
  server: {
    date: createFormatter<Formatter["server"]["date"]>(serverFormats.date),
    datetime: createFormatter<Formatter["server"]["datetime"]>(
      serverFormats.datetime
    ),
  },
};

const clientDateFormatter = formatter.client.date;
const clientDatetimeFormatter = formatter.client.datetime;
const serverDateFormatter = formatter.server.date;
const serverDatetimeFormatter = formatter.server.datetime;

export {
  clientDateFormatter,
  clientDatetimeFormatter,
  serverDateFormatter,
  serverDatetimeFormatter,
};
export default formatter;
