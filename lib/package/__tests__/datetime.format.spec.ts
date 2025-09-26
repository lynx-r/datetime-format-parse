import { INVALID_DATE } from "../lib/constants";
import createFormatter from "../lib/createFormatter";
import { Formatter } from "../lib/types";
import {
  config,
  FUNCTION_FORMATS,
  INVALID_DATETIME_STR,
  TZ_OFFSET_BY_UTC,
} from "./constants";
import { TestConfig } from "./types";
import { getCorrectFormat, getDatetimeStr } from "./utils";

let formatter: Formatter<TestConfig> | null = null;

beforeAll(() => {
  formatter = createFormatter(config);
});

test("invalid input", () => {
  const formattedNull = formatter?.formatDatetimeInTest(null);
  expect(formattedNull).toBe(null);

  const formattedUndef = formatter?.formatDatetimeInTest(undefined);
  expect(formattedUndef).toBe(null);

  const formattedInvalidStr =
    formatter?.formatDatetimeInTest(INVALID_DATETIME_STR);
  expect(formattedInvalidStr).toBe(null);

  const formattedInvalidDate = formatter?.formatDatetimeInTest(INVALID_DATE);
  expect(formattedInvalidDate).toBe(null);
});

test("format datetime from server to client and vice versa", () => {
  for (const offset of TZ_OFFSET_BY_UTC) {
    const datetimeStr = getDatetimeStr(offset);
    const datetimeDate = new Date(datetimeStr);
    const datetimeTimestamp = datetimeDate.getTime();

    const formatted = formatter?.formatDatetimeInTest(datetimeStr);
    const formatted2 = formatter?.formatDatetimeInTest(datetimeDate);
    const formatted3 = formatter?.formatDatetimeInTest(datetimeTimestamp);
    expect(formatted).not.toBeNull();
    expect(formatted).toEqual(formatted2);
    expect(formatted).toEqual(formatted3);
    const correct = getCorrectFormat(
      datetimeStr,
      FUNCTION_FORMATS.formatDatetimeInTest
    );
    expect(formatted).toBe(correct);

    const serverFormatInPivotTz =
      formatter?.formatDatetimeToServerInTest(formatted);
    const inClientTz = getCorrectFormat(datetimeStr);
    const correctInPivotTz = getCorrectFormat(
      inClientTz,
      FUNCTION_FORMATS.formatDatetimeToServerInTest,
      config.constants.TZ
    );
    expect(serverFormatInPivotTz).toBe(correctInPivotTz);
  }
});
