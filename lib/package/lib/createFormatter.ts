import { setConfig } from "./config";
import { formatDatetimeHelper } from "./date-utils";
import { Config, CreateFormatterFn, Format, Formatter } from "./types";

let FORMATTER: Formatter<Format> | null = null;

const createFormatter: CreateFormatterFn = <T extends Config>(
  config: T
): Formatter<T["format"]> => {
  setConfig(config);
  FORMATTER = Object.entries(config.format).reduce(
    (acc, [formatName, formatStr]) => {
      return {
        ...acc,
        [formatName]: (datetime) => {
          return formatDatetimeHelper(datetime, formatStr);
        },
      };
    },
    {} as Formatter<T["format"]>
  );

  return FORMATTER;
};

export default createFormatter;
