// import createParser from "../lib/createParser";
// import { ParseDate } from "../lib/types";
// import { config } from "../test-utils/constants";

// let parseDate: ParseDate | null = null;

// beforeAll(() => {
//   parseDate = createParser(config);
// });

// test("парсинг ISO строки", () => {
//   const parsed = parseDate!("19.07.2023 12:21");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T12:21:00+03:00").toISOString()
//   );
// });

// test("парсинг ISO строки на клиенте с 'UTC+3 (МСК)'", () => {
//   const parsed = parseDate!("19.07.2023 12:21, UTC+3 (МСК)");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T12:21:00+03:00").toISOString()
//   );
// });

// test("парсинг ISO строки с 'UTC+3 (МСК)' с 'в'", () => {
//   const parsed = parseDate!("19.07.2023 в 12:21, UTC+3 (МСК)");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T12:21:00+03:00").toISOString()
//   );
// });

// test("парсинг ISO строки сервера", () => {
//   const parsed = parseDate!("2023-07-19T12:21:15+03:00");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T12:21:15+03:00").toISOString()
//   );
// });

// test("парсинг ISO строки сервера без времени", () => {
//   const parsed = parseDate!("2023-07-19");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T00:00:00+03:00").toISOString()
//   );
// });

// test("парсинг даты", () => {
//   const parsed = parseDate!("19.07.2023");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T00:00:00+03:00").toISOString()
//   );
// });

// test("парсинг даты с 2 цифрами года валидны", () => {
//   const parsed = parseDate!("19.07.23");
//   expect(parsed.toISOString()).toBe(
//     new Date("2023-07-19T00:00:00+03:00").toISOString()
//   );
// });
