import { isValid } from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { Config, FormatParams, InputDate } from "./types";

import parseInputDate from "./parseInputDate";

const formatDatetime = (
  date: InputDate,
  format: FormatParams,
  config: Config
): string | null => {
  let formatPattern, parseParams;
  if (typeof format === "object") {
    formatPattern = format.formatPattern;
    const complementTime = format.complementTime;
    parseParams = { complementTime };
  } else {
    formatPattern = format;
  }
  const dateObject = parseInputDate(date, config, parseParams);

  if (!isValid(dateObject)) {
    return null;
  }
  const pivotTz = config.constants.TZ;
  return formatInTimeZone(dateObject, pivotTz, formatPattern);
};

export default formatDatetime;
