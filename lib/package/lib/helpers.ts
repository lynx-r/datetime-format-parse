import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import getConfig from "./config";
import { Format } from "./types";

// todo config check
// todo refactor
//

export const getPivotTz = () => {
  const config = getConfig();
  if (!config) {
    return "";
  }
  const PIVOT_TZ = config.constants.TZ;
  if (!PIVOT_TZ) {
    console.error("error:");
    return "";
  }
  return PIVOT_TZ;
};

export const getPivotTzUtcHours = () => {
  const config = getConfig();
  if (!config) {
    return "";
  }
  const pivotTz = getPivotTz();
  return formatInTimeZone(new Date(), pivotTz, "XXX");
};

export const getValidFormats = (): string[] => {
  const config = getConfig();
  if (!config) {
    return [];
  }
  const formats = config["format"] as Format;
  return Object.values(formats).map((fmt) =>
    typeof fmt === "object" ? fmt.formatStr : fmt
  );
};
