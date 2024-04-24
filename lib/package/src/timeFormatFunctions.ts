import { timeFormatFunctions } from "./constants";
import { formatDatetimeHelper } from "./date-utils";
import { ITimeFormatFunction, TInputDate } from "./types";

export const funcs = Object.entries(timeFormatFunctions).reduce(
  (acc, [functionName, format]) => {
    return {
      ...acc,
      [functionName]: (datetime: TInputDate) => {
        const r = formatDatetimeHelper(datetime, format);

        return r;
      },
    };
  },
  {} as ITimeFormatFunction
);
