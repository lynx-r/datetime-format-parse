import { Config } from "./types";

let CONFIG: Config | null = null;

export const setConfig = (config: Config) => {
  CONFIG = config;
};

const getConfig = () => {
  return CONFIG;
};

export default getConfig;
