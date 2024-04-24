import config from "config";
import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import zonedTimeToUtc from "date-fns-tz/zonedTimeToUtc";
import { TZ_MSK } from "../src/constants";
import { getTimezone } from "../src/date-utils";
import { funcs } from "../src/timeFormatFunctions";
import { ITimeFormat } from "../src/types";

const functionFormats: ITimeFormat = config.get("timeFormatFunctions");

const getCorrectFormat = (date: string, format: string) => {
  const zonedTime = zonedTimeToUtc(new Date(date), getTimezone());

  return formatInTimeZone(zonedTime, TZ_MSK, format);
};

test("форматирование ISO строки на клиенте с 'UTC+3 (МСК)' в том же ЧП", () => {
  const formatted = funcs.formatDatetimeInMskTz("2023-07-19T12:21:15+03:00");
  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+03:00",
    functionFormats.formatDatetimeInMskTz
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 12:21, UTC+3 (МСК)"); // MSK

  const inServer = funcs.formatDatetimeToServer(formatted);
  expect(inServer).toBe("2023-07-19T12:21:00+03:00");
});

// test("форматирование Date на клиенте с 'UTC+3 (МСК)' в том же ЧП", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T12:21:15+03:00")
//   );
//   expect(formatted).toBe("19.07.2023 12:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование timestamp на клиенте с 'UTC+3 (МСК)' в том же ЧП", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T12:21:15+03:00").getTime()
//   );
//   expect(formatted).toBe("19.07.2023 12:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование ISO строки на клиенте с 'UTC+3 (МСК)' не МСК тот же день", () => {
//   const formatted = formatDatetimeInMskTz("2023-07-19T12:21:15+04:00");
//   expect(formatted).toBe("19.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T11:21:00+03:00");
// });

// test("форматирование Date на клиенте с 'UTC+3 (МСК)' не МСК тот же день", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T12:21:15+04:00")
//   );
//   expect(formatted).toBe("19.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T11:21:00+03:00");
// });

// test("форматирование timestamp на клиенте с 'UTC+3 (МСК)' не МСК тот же день", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T12:21:15+04:00").getTime()
//   );
//   expect(formatted).toBe("19.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T11:21:00+03:00");
// });

// test("форматирование ISO строки на клиенте с 'UTC+3 (МСК)' 1 день назад", () => {
//   const formatted = formatDatetimeInMskTz("2023-07-19T01:21:15+13:00");
//   expect(formatted).toBe("18.07.2023 15:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-18T15:21:00+03:00");
// });

// test("форматирование Date на клиенте с 'UTC+3 (МСК)' 1 день назад", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T01:21:15+13:00")
//   );
//   expect(formatted).toBe("18.07.2023 15:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-18T15:21:00+03:00");
// });

// test("форматирование timestamp на клиенте с 'UTC+3 (МСК)' 1 день назад", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T01:21:15+13:00").getTime()
//   );
//   expect(formatted).toBe("18.07.2023 15:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-18T15:21:00+03:00");
// });

// test("форматирование ISO строки на клиенте с 'UTC+3 (МСК)' 1 день вперед", () => {
//   const formatted = formatDatetimeInMskTz("2023-07-19T22:21:15-10:00");
//   expect(formatted).toBe("20.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-20T11:21:00+03:00");
// });

// test("форматирование Date на клиенте с 'UTC+3 (МСК)' 1 день вперед", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T22:21:15-10:00")
//   );
//   expect(formatted).toBe("20.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-20T11:21:00+03:00");
// });

// test("форматирование timestamp на клиенте с 'UTC+3 (МСК)' 1 день вперед", () => {
//   const formatted = formatDatetimeInMskTz(
//     new Date("2023-07-19T22:21:15-10:00").getTime()
//   );
//   expect(formatted).toBe("20.07.2023 11:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-20T11:21:00+03:00");
// });

// test("форматирование ISO строки  на клиенте с 'UTC+3 (МСК)' с 'в'", () => {
//   const formatted = formatDatetimeAtInMskTz("2023-07-19T12:21:15+03:00");
//   expect(formatted).toBe("19.07.2023 в 12:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование Date на клиенте с 'UTC+3 (МСК)' с 'в'", () => {
//   const formatted = formatDatetimeAtInMskTz(
//     new Date("2023-07-19T12:21:15+03:00")
//   );
//   expect(formatted).toBe("19.07.2023 в 12:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование timestamp на клиенте с 'UTC+3 (МСК)' с 'в'", () => {
//   const formatted = formatDatetimeAtInMskTz(
//     new Date("2023-07-19T12:21:15+03:00").getTime()
//   );
//   expect(formatted).toBe("19.07.2023 в 12:21, UTC+3 (МСК)");

//   const inServer = formatDatetimeToServer(formatted);
//   expect(inServer).toBe("2023-07-19T12:21:00+03:00");
// });

test("форматирование ISO строки на клиенте", () => {
  const formatted = funcs.formatDatetime("2023-07-19T12:21:15+03:00");

  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+03:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 12:21"); // MSK
});

test("форматирование Date на клиенте", () => {
  const formatted = funcs.formatDatetime(new Date("2023-07-19T12:21:15+03:00"));
  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+03:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 12:21"); // MSK
});

test("форматирование timestamp на клиенте", () => {
  const formatted = funcs.formatDatetime(
    new Date("2023-07-19T12:21:15+03:00").getTime()
  );
  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+03:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 12:21"); // MSK
});

test("форматирование даты и времени на клиенте тот же день", () => {
  const formatted = funcs.formatDatetime("2023-07-19T12:21:15+04:00");

  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+04:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 11:21"); // MSK
});

test("форматирование Date на клиенте тот же день", () => {
  const formatted = funcs.formatDatetime(new Date("2023-07-19T12:21:15+04:00"));
  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+04:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 11:21"); // MSK
});

test("форматирование timestamp на клиенте тот же день", () => {
  const formatted = funcs.formatDatetime(
    new Date("2023-07-19T12:21:15+04:00").getTime()
  );
  const correct = getCorrectFormat(
    "2023-07-19T12:21:15+04:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("19.07.2023 11:21"); // MSK
});

test("форматирование ISO строки на клиенте 1 день назад", () => {
  const formatted = funcs.formatDatetime("2023-07-19T01:21:15+13:00");
  const correct = getCorrectFormat(
    "2023-07-19T01:21:15+13:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("18.07.2023 15:21"); // MSK
});

test("форматирование Date на клиенте 1 день назад", () => {
  const formatted = funcs.formatDatetime(new Date("2023-07-19T01:21:15+13:00"));
  const correct = getCorrectFormat(
    "2023-07-19T01:21:15+13:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
});

test("форматирование timestamp на клиенте 1 день назад", () => {
  const formatted = funcs.formatDatetime(
    new Date("2023-07-19T01:21:15+13:00").getTime()
  );
  const correct = getCorrectFormat(
    "2023-07-19T01:21:15+13:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
});

test("форматирование даты и времени на клиенте 1 день вперед", () => {
  const formatted = funcs.formatDatetime("2023-07-19T22:21:15-10:00");
  const correct = getCorrectFormat(
    "2023-07-19T22:21:15-10:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("20.07.2023 11:21"); // MSK
});

test("форматирование Date на клиенте 1 день вперед", () => {
  const formatted = funcs.formatDatetime(new Date("2023-07-19T22:21:15-10:00"));
  const correct = getCorrectFormat(
    "2023-07-19T22:21:15-10:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("20.07.2023 11:21"); // MSK
});

test("форматирование timestamp на клиенте 1 день вперед", () => {
  const formatted = funcs.formatDatetime(
    new Date("2023-07-19T22:21:15-10:00").getTime()
  );
  const correct = getCorrectFormat(
    "2023-07-19T22:21:15-10:00",
    functionFormats.formatDatetime
  );
  expect(formatted).toBe(correct);
  // expect(formatted).toBe("20.07.2023 11:21"); // MSK
});

// test("форматирование ISO строки для сервере", () => {
//   const formatted = formatDatetimeToServer("19.07.2023 12:21");
//   expect(formatted).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование ISO строки для сервера с 'UTC+3 (МСК)'", () => {
//   const formatted = formatDatetimeToServer("19.07.2023 12:21, UTC+3 (МСК)");
//   expect(formatted).toBe("2023-07-19T12:21:00+03:00");
// });

// test("форматирование ISO строки для сервера с 'UTC+3 (МСК)' с 'в'", () => {
//   const formatted = formatDatetimeToServer("19.07.2023 в 12:21, UTC+3 (МСК)");
//   expect(formatted).toBe("2023-07-19T12:21:00+03:00");
// });
