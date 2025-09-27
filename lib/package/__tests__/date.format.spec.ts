import { INVALID_DATE } from "../lib/constants";
import createFormatter from "../lib/createFormatter";
import { Formatter } from "../lib/types";
import {
  config,
  FUNCTION_FORMATS,
  INVALID_DATETIME_STR,
  TZ_OFFSET_BY_UTC,
} from "../test-utils/constants";
import { TestConfig } from "../test-utils/types";
import { getCorrectFormat, getIsoDateWithOffset } from "../test-utils/utils";

let formatter: Formatter<TestConfig> | null = null;

beforeAll(() => {
  formatter = createFormatter(config);
});

test("invalid input", () => {
  const formattedNull = formatter?.formatDateInTest(null);
  expect(formattedNull).toBe(null);

  const formattedUndef = formatter?.formatDateInTest(undefined);
  expect(formattedUndef).toBe(null);

  const formattedInvalidStr = formatter?.formatDateInTest(INVALID_DATETIME_STR);
  expect(formattedInvalidStr).toBe(null);

  const formattedInvalidDate = formatter?.formatDateInTest(INVALID_DATE);
  expect(formattedInvalidDate).toBe(null);
});

for (const offset of TZ_OFFSET_BY_UTC) {
  test(`format date with offset "${offset}" to TZ "${config.constants.TZ}" from server to client`, () => {
    const serverDateStr = getIsoDateWithOffset(offset);
    const serverDate = new Date(serverDateStr);
    const serverTimestamp = serverDate.getTime();

    const formatted = formatter?.formatDateInTest(serverDateStr);
    const formatted2 = formatter?.formatDateInTest(serverDate);
    const formatted3 = formatter?.formatDateInTest(serverTimestamp);
    expect(formatted).not.toBeNull();
    expect(formatted).toEqual(formatted2);
    expect(formatted).toEqual(formatted3);
    const correct = getCorrectFormat(
      serverDateStr,
      FUNCTION_FORMATS.formatDateInTest
    );
    expect(formatted).toBe(correct);
  });
}

// for (const offset of TZ_OFFSET_BY_UTC) {
//   test(`format date with offset: ${offset} from server to client and vice versa`, () => {
//     const datetimeStr = getDatetimeStr(offset);
//     const datetimeDate = new Date(datetimeStr);
//     const datetimeTimestamp = datetimeDate.getTime();

//     const formatted = formatter.formatDateInTest(datetimeStr);
//     const formatted2 = formatter.formatDateInTest(datetimeDate);
//     const formatted3 = formatter.formatDateInTest(datetimeTimestamp);
//     expect(formatted).not.toBeNull();
//     expect(formatted).toEqual(formatted2);
//     expect(formatted).toEqual(formatted3);
//     const correct = getCorrectFormat(
//       datetimeStr,
//       FUNCTION_FORMATS.formatDateInTest
//     );
//     expect(formatted).toBe(correct);

//     const serverFormatInPivotTz = formatter.formatDateToServerInTest(formatted);
//     const inClientTz = getCorrectFormat(
//       getDatetimeMidnightTimeStr(datetimeStr)
//     );
//     const correctInPivotTz = getCorrectFormat(
//       inClientTz,
//       FUNCTION_FORMATS.formatDateToServerComplementTimeInTest.formatStr,
//       PIVOT_TZ
//     );
//     expect(serverFormatInPivotTz).toBe(correctInPivotTz);
//   });
// }
