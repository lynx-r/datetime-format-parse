import parseDate from "./core/parseDate";
import { Config } from "./types";

const createParser = <T extends Config>(config: T) => {
  return (datetime: string) => parseDate(datetime, config);
};

export default createParser;
