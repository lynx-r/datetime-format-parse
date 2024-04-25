import formatter from "../src/formatter";

test("форматирование ISO строки на клиенте", () => {
  const formatted = formatter.formatDateInTest("2023-07-19T12:21:15+03:00");
  expect(formatted).toBe("19.07.2023");

  const inServer = formatter.formatDateToServerInTest(formatted);
  expect(inServer).toBe("2023-07-18");

  const inServerComplementTime =
    formatter.formatDateToServerComplementTimeInTest(formatted);
  expect(inServerComplementTime).toBe("2023-07-19");
});

// test("форматирование ISO строки на клиенте тот же день", () => {
//   const formatted = formatter.format("2023-07-19T12:21:15+04:00");
//   expect(formatted).toBe("19.07.2023");

//   const inServer = formatter.formatToServer(formatted);
//   expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование ISO строки на клиенте 1 день назад", () => {
//   const formatted = formatter.format("2023-07-19T01:21:15+13:00");
//   expect(formatted).toBe("18.07.2023");

//   const inServer = formatter.format(formatted);
//   expect(inServer).toBe(`2023-07-18T00:00:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование ISO строки на клиенте 1 день вперед", () => {
//   const formatted = formatter.format("2023-07-19T22:21:15-10:00");
//   expect(formatted).toBe("20.07.2023");

//   const inServer = formatter.format(formatted);
//   expect(inServer).toBe(`2023-07-20T00:00:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование ISO строки сервера без времени", () => {
//   const formatted = formatter.format("2023-07-19");
//   expect(formatted).toBe("19.07.2023");

//   const inServer = formatter.format(formatted);
//   expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование даты и времени для сервере", () => {
//   const formatted = formatter.format("19.07.2023 12:21");
//   expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование даты и времени с 'UTC+3 (МСК)' для сервера ", () => {
//   const formatted = formatter.format(
//     "any prefix: 19.07.2023 12:21, any postfix"
//   );
//   expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование даты и времени с 'UTC+3 (МСК)' с 'в' для сервера", () => {
//   const formatted = formatter.format(
//     "any prefix: 19.07.2023 custom middle 12:21, any postfix"
//   );
//   expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
// });

// test("форматирование даты на клиенте с 2 цифрами года", () => {
//   const formatted = formatter.format("2023-07-19T12:21:15+03:00");
//   expect(formatted).toBe("19.07.23");

//   const inServer = formatter.format(formatted);
//   expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
// });
