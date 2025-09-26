import { Config, CreateFormatterFn, Format, Formatter } from "./types";
import formatDatetime from "./formatDatetime";

let FORMATTER: Formatter<Format> | null = null;

const createFormatter: CreateFormatterFn = <T extends Config>(
  config: T
): Formatter<T["format"]> => {
  FORMATTER = Object.entries(config.format).reduce(
    (acc, [functionName, formatPattern]) => {
      return {
        ...acc,
        [functionName]: (datetime) => {
          return formatDatetime(datetime, formatPattern, config);
        },
      };
    },
    {} as Formatter<T["format"]>
  );

  return FORMATTER;
};

export default createFormatter;
