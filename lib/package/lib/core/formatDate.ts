import { isValid } from "date-fns";

import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { Config, InputDate } from "../types";

import parseDate from "./parseDate";

const formatDatetime = (
  date: InputDate,
  format: string,
  config: Config,
  toServer: boolean = false
): string | null => {
  const dateObject = parseDate(date, config);

  if (!isValid(dateObject)) {
    return null;
  }
  const pivotTz = config.constants.TZ;
  if (toServer) {
    return formatInTimeZone(dateObject, pivotTz, config.constants.serverFormat);
  }
  return formatInTimeZone(dateObject, pivotTz, format);
};

export default formatDatetime;
