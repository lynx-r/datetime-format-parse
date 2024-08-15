import { isValid } from "date-fns";

import { parseInputDate } from "./date-utils";

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
  // todo
  // if (isMatch(datetime, SERVER_DATETIME_FORMAT)) {
  //   return true;
  // }
  const dateObject = parseInputDate(datetime);
  return isValid(dateObject);
};
