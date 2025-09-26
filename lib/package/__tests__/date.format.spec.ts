import { INVALID_DATE } from "../src/constants";
import formatter from "../src/formatter";
import {
  config,
  FUNCTION_FORMATS,
  INVALID_DATETIME_STR,
  TZ_OFFSET_BY_UTC,
} from "./constants";
import {
  getCorrectFormat,
  getDatetimeStr,
  getDatetimeWithCurrentTimeStr,
} from "./utils";

test("invalid input", () => {
  const formattedNull = formatter.formatDateInTest(null);
  expect(formattedNull).toBe(null);

  const formattedUndef = formatter.formatDateInTest(undefined);
  expect(formattedUndef).toBe(null);

  const formattedInvalidStr = formatter.formatDateInTest(INVALID_DATETIME_STR);
  expect(formattedInvalidStr).toBe(null);

  const formattedInvalidDate = formatter.formatDateInTest(INVALID_DATE);
  expect(formattedInvalidDate).toBe(null);
});

for (const offset of TZ_OFFSET_BY_UTC) {
  test(`format date with offset: ${offset} from server to client and vice versa`, () => {
    const datetimeStr = getDatetimeStr(offset);
    const datetimeDate = new Date(datetimeStr);
    const datetimeTimestamp = datetimeDate.getTime();

    const formatted = formatter.formatDateInTest(datetimeStr);
    const formatted2 = formatter.formatDateInTest(datetimeDate);
    const formatted3 = formatter.formatDateInTest(datetimeTimestamp);
    expect(formatted).not.toBeNull();
    expect(formatted).toEqual(formatted2);
    expect(formatted).toEqual(formatted3);
    const correct = getCorrectFormat(
      datetimeStr,
      FUNCTION_FORMATS.formatDateInTest
    );
    expect(formatted).toBe(correct);

    const serverFormatInPivotTz =
      formatter.formatDateToServerComplementTimeInTest(formatted);
    const inClientTz = getCorrectFormat(getDatetimeWithCurrentTimeStr(offset));
    const correctInPivotTz = getCorrectFormat(
      inClientTz,
      FUNCTION_FORMATS.formatDateToServerComplementTimeInTest.formatPattern,
      config.constants.TZ
    );
    expect(serverFormatInPivotTz).toBe(correctInPivotTz);
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
