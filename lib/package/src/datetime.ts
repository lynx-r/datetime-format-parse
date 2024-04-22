import { isMatch, isValid } from "date-fns";

import { SERVER_DATETIME_FORMAT } from "./constants";
import { formatDatetimeHelper, parseInputDate } from "./date-utils";
import { TInputDate } from "./types";

/**
 * Форматирует дату и время в формат компонента "dd.MM.yyyy HH:mm UTC+3 (МСК)" из формата сервера
 *
 * @param datetime в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку DATETIME_WITH_TZ_MSK_FORMAT""dd.MM.yyyy HH:mm" UTC+3 (МСК)" либо ''
 */
export const formatDatetimeInMskTz = (datetime: TInputDate): string => {
  return formatDatetimeHelper(datetime, {
    side: "server",
    toClientFormat: "datetime-with-tz",
  });
};

/**
 * Форматирует дату и время в формат компонента "dd.MM.yyyy 'в' HH:mm, UTC+3 (МСК)" из формата сервера
 *
 * @param datetime в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку DATETIME_WITH_TZ_AT_MSK_FORMAT "dd.MM.yyyy 'в' HH:mm, UTC+3 (МСК)" либо ''
 */
export const formatDatetimeAtInMskTz = (datetime: TInputDate): string => {
  return formatDatetimeHelper(datetime, {
    side: "server",
    toClientFormat: "datetime-at-with-tz",
  });
};

/**
 * Форматирует дату и время в формат компонента "dd.MM.yyyy HH:mm" из формата сервера
 *
 * @param datetime в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку DATETIME_FORMAT "dd.MM.yyyy HH:mm" либо ''
 */
export const formatDatetime = (datetime: TInputDate): string => {
  return formatDatetimeHelper(datetime, {
    side: "server",
    toClientFormat: "datetime",
  });
};

/**
 * Форматирует дату и время в формат сервера из формата компонента
 *
 * @param datetime в виде:
 *  1. строки даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *  2. Объекта Date
 *  3. timestamp
 *
 * @return {String} строку SERVER_DATETIME_FORMAT "yyyy-MM-dd'T'HH:mm:ss+03:00" либо ''
 *  ЧП МСК +03:00 указывается всегда
 */
export const formatDatetimeToServer = (datetime: TInputDate): string => {
  return formatDatetimeHelper(datetime, {
    side: "client",
    toServerFormat: "complete",
  });
};

/**
 * Парсит строку даты в Date
 *
 * @param datetime строка даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *
 * @return {Date} объект Date
 */
export const parseDatetime = (datetime: string): Date => {
  return parseInputDate(datetime);
};

/**
 * Проверяет дату и время на валидный формат и возможность парсинга
 *
 * @param datetime строка даты из VALID_CLIENT_FORMATS, SERVER_DATE_FORMAT или ISO_DATETIME_FORMAT
 *
 * @return {Boolean}
 */
export const isValidDatetime = (datetime: string): boolean => {
  // серверную дату пропускаем только в ЧП МСК
  if (isMatch(datetime, SERVER_DATETIME_FORMAT)) {
    return true;
  }
  const dateObject = parseInputDate(datetime);
  return isValid(dateObject);
};
