import { isValidDate } from "../src";

test("дата валидна", () => {
  const isValid = isValidDate("19.07.2023");
  expect(isValid).toBe(true);
});

test("даты и времени с 'UTC+3 (МСК)' не валидны ", () => {
  const isValid = isValidDate("19.07.2023 12:21, UTC+3 (МСК)");
  expect(isValid).toBe(false);
});

test("даты и времени с 'UTC+3 (МСК)' с 'в' не валидны", () => {
  const isValid = isValidDate("19.07.2023 в 12:21, UTC+3 (МСК)");
  expect(isValid).toBe(false);
});

test("даты и времени с 2 цифрами года валидны", () => {
  const isValid = isValidDate("19.07.23");
  expect(isValid).toBe(true);
});

test("дата не валидна", () => {
  const isValid = isValidDate("19.07.2023 11:00 not valid");
  expect(isValid).toBe(false);
});
