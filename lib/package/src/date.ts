import { isMatch, isValid } from "date-fns";

import { DATE_2_FORMAT, DATE_FORMAT } from "./constants";
import { formatDatetimeHelper, parseInputDate } from "./date-utils";
import { TInputDate } from "./types";

/**
 * Форматирует дату в формат компонента "dd.MM.yyyy" из формата сервера
 *
 * @param date в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку DATE_FORMAT "dd.MM.yyyy" либо ''
 */
export const formatDate = (date: TInputDate): string => {
  return formatDatetimeHelper(date, { side: "server", toClientFormat: "date" });
};

/**
 * Форматирует дату в формат компонента "dd.MM.yy" из формата сервера
 * @param date в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку DATE_2_FORMAT "dd.MM.yy" либо ''
 */
export const formatDateWith2Digits = (date: TInputDate): string => {
  return formatDatetimeHelper(date, {
    side: "server",
    toClientFormat: "date-2",
  });
};

/**
 * Форматирует дату в формат сервера из формата компонента
 *
 * @param date в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку SERVER_DATETIME_FORMAT "yyyy-MM-dd'T'HH:mm:ss+03:00" либо ''
 *  ЧП МСК +03:00 указывается всегда
 */
export const formatDateToServer = (date: TInputDate): string => {
  return formatDatetimeHelper(date, {
    side: "client",
    toServerFormat: "complete",
  });
};

/**
 * Проверяет строку даты на соответствие формату "dd.MM.yyyy" или "dd.MM.yy" и возможность парсинга
 *
 * @param date строка даты: DATE_FORMAT "dd.MM.yyyy" или DATE_2_FORMAT "dd.MM.yy"
 *
 * @return {Boolean}
 */
export const isValidDate = (date: string): boolean => {
  if (!isMatch(date, DATE_FORMAT) && !isMatch(date, DATE_2_FORMAT)) {
    return false;
  }
  const dateObject = parseInputDate(date);
  return isValid(dateObject);
};
