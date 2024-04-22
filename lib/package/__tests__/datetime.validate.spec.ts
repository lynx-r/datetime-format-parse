import { isValidDatetime } from "../src";

test("валидация строки", () => {
  const validated = isValidDatetime("19.07.2023 12:21");
  expect(validated).toBe(true);
});

test("валидация строки с 'UTC+3 (МСК)'", () => {
  const validated = isValidDatetime("19.07.2023 12:21, UTC+3 (МСК)");
  expect(validated).toBe(true);
});

test("валидация строки с 'UTC+3 (МСК)' с 'в'", () => {
  const validated = isValidDatetime("19.07.2023 в 12:21, UTC+3 (МСК)");
  expect(validated).toBe(true);
});

test("валидация ISO строки", () => {
  const validated = isValidDatetime("2023-07-19T12:21:15+03:00");
  expect(validated).toBe(true);
});
