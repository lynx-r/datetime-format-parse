import { TZ_MSK_UTC_HOURS } from "../src/constants";
import { clientDateFormatter, serverDateFormatter } from "../src/formatter";

test("форматирование ISO строки на клиенте", () => {
  const formatted = clientDateFormatter.format("2023-07-19T12:21:15+03:00");
  expect(formatted).toBe("19.07.2023");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe("2023-07-19");
});

test("форматирование ISO строки на клиенте тот же день", () => {
  const formatted = clientDateFormatter.format("2023-07-19T12:21:15+04:00");
  expect(formatted).toBe("19.07.2023");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование ISO строки на клиенте 1 день назад", () => {
  const formatted = clientDateFormatter.format("2023-07-19T01:21:15+13:00");
  expect(formatted).toBe("18.07.2023");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe(`2023-07-18T00:00:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование ISO строки на клиенте 1 день вперед", () => {
  const formatted = clientDateFormatter.format("2023-07-19T22:21:15-10:00");
  expect(formatted).toBe("20.07.2023");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe(`2023-07-20T00:00:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование ISO строки сервера без времени", () => {
  const formatted = clientDateFormatter.format("2023-07-19");
  expect(formatted).toBe("19.07.2023");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование даты и времени для сервере", () => {
  const formatted = serverDateFormatter.format("19.07.2023 12:21");
  expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование даты и времени с 'UTC+3 (МСК)' для сервера ", () => {
  const formatted = serverDateFormatter.format(
    "any prefix: 19.07.2023 12:21, any postfix"
  );
  expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование даты и времени с 'UTC+3 (МСК)' с 'в' для сервера", () => {
  const formatted = serverDateFormatter.format(
    "any prefix: 19.07.2023 custom middle 12:21, any postfix"
  );
  expect(formatted).toBe(`2023-07-19T12:21:00${TZ_MSK_UTC_HOURS}`);
});

test("форматирование даты на клиенте с 2 цифрами года", () => {
  const formatted = clientDateFormatter.format("2023-07-19T12:21:15+03:00");
  expect(formatted).toBe("19.07.23");

  const inServer = serverDateFormatter.format(formatted);
  expect(inServer).toBe(`2023-07-19T00:00:00${TZ_MSK_UTC_HOURS}`);
});
