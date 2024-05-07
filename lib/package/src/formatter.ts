import { formats } from "./constants";
import { formatDatetimeHelper } from "./date-utils";
import { Formats, Formatter, InputDate } from "./types";

const createFormatter = <T>(formats: Formats): T => {
  return Object.entries(formats).reduce((acc, [formatName, formatStr]) => {
    return {
      ...acc,
      [formatName]: (datetime: InputDate) => {
        const r = formatDatetimeHelper(datetime, formatStr);
        return r;
      },
    };
  }, {} as T);
};

const formatter: Formatter = createFormatter<Formatter>(formats);

export default formatter;
