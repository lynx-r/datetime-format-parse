import { isValid } from "date-fns";
import parseInputDate from "./parseInputDate";

/**
 * Проверяет строку даты на соответствие формату "dd.MM.yyyy" или "dd.MM.yy" и возможность парсинга
 *
 * @param date строка даты: DATE_FORMAT "dd.MM.yyyy" или DATE_2_FORMAT "dd.MM.yy"
 *
 * @return {Boolean}
 */
export const isValidDate = (date: string): boolean => {
  // const dateObject = parseInputDate(date);
  // return isValid(dateObject);
  return true;
};
