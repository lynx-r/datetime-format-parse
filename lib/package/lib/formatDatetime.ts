import { isValid } from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { Config, FormatPattern, InputDate } from "./types";

import parseInputDate from "./parseInputDate";

const formatDatetime = (
  date: InputDate,
  format: FormatPattern,
  config: Config
): string | null => {
  let formatPattern, parseParams;
  if (typeof format === "object") {
    formatPattern = format.pattern;
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
