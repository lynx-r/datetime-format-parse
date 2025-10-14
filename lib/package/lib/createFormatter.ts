import formatDate from "./core/formatDate";
import { Config, CreateFormatterFn, Format, Formatter } from "./types";

let FORMATTER: Formatter<Format> | null = null;

const createFormatter: CreateFormatterFn = <T extends Config>(
  config: T
): Formatter<T["formats"]> => {
  FORMATTER = Object.entries(config.formats).reduce(
    (acc, [functionName, formatPattern]) => {
      return {
        ...acc,
        [functionName]: (datetime) => {
          return formatDate(datetime, formatPattern, config);
        },
        [`${functionName}ToServer`]: (datetime) => {
          return formatDate(datetime, formatPattern, config, true);
        },
      };
    },
    {} as Formatter<T["formats"]>
  );

  return FORMATTER;
};

export default createFormatter;
