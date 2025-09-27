import { isValid } from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { Config, FormatPattern, InputDate } from "../types";

import parseDate from "./parseDate";

const formatDatetime = (
  date: InputDate,
  format: FormatPattern,
  config: Config
): string | null => {
  let formatPattern;
  if (typeof format === "object") {
    formatPattern = format.pattern;
  } else {
    formatPattern = format;
  }
  const dateObject = parseDate(date, config);

  if (!isValid(dateObject)) {
    return null;
  }
  const pivotTz = config.constants.TZ;
  return formatInTimeZone(dateObject, pivotTz, formatPattern);
};

export default formatDatetime;
