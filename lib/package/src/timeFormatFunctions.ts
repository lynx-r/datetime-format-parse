import { timeFormatFunctions } from "./constants";
import { formatDatetimeHelper } from "./date-utils";
import { ITimeFormatFunction, TInputDate } from "./types";

// const timeFormatFunctions = {
//   formatClient: (datetime: TInputDate) => {
//     return formatDatetimeHelper(datetime, {
//       side: "server",
//       toClientFormat: "datetime",
//     });

//   }
// }

export const funcs = Object.entries(timeFormatFunctions).reduce(
  (acc, [functionName, format]) => {
    return {
      ...acc,
      [functionName]: (datetime: TInputDate) => {
        const r = formatDatetimeHelper(datetime, {
          side: "server",
          toClientFormat: format,
        });

        return r + " ??123";
      },
    };
  },
  {} as ITimeFormatFunction
);
