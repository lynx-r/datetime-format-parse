import * as config from "../config/default.json";
export { config };

export const TZ_OFFSET_BY_UTC = [
  "Z",
  "-12:00",
  "-11:00",
  "-10:30",
  "-10:00",
  "-09:30",
  "-09:00",
  "-08:30",
  "-08:00",
  "-07:00",
  "-06:00",
  "-05:00",
  "-04:30",
  "-04:00",
  "-03:30",
  "-03:00",
  "-02:30",
  "-02:00",
  "-01:00",
  "-00:44",
  // // "-00:25:21", // ???
  // "+00:00",
  // "+00:20",
  // "+00:30",
  // "+01:00",
  // "+01:24",
  // "+01:30",
  // "+02:00",
  // "+02:30",
  // "+03:00",
  // "+03:30",
  // "+04:00",
  // "+04:30",
  // "+04:51",
  // "+05:00",
  // "+05:30",
  // "+05:40",
  // "+05:45",
  // "+06:00",
  // "+06:30",
  // "+07:00",
  // "+07:20",
  // "+07:30",
  // "+08:00",
  // "+08:30",
  // "+08:45",
  // "+09:00",
  // "+09:30",
  // "+09:45",
  // "+10:00",
  // "+10:30",
  // "+11:00",
  // "+11:30",
  // "+12:00",
  // "+12:45",
  // "+13:00",
  // "+13:45",
  // "+14:00",
];

export const FUNCTION_FORMATS = config["format"];

export const ISO_DATETIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";

export const INVALID_TIMESTAMP = 10000000000000000000n;

export const INVALID_DATETIME_STR = "invalid time";

export const DATETIME_STR = "2023-07-19T10:00:00";

export const DATETIME_STR_MIDNIGHT = "2023-07-19T00:00:00";
