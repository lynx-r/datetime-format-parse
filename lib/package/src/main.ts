import s from "../config/default.json";
import createFormatter from "../lib/createFormatter";

const formatter = createFormatter(s);
const now = new Date();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <div>test lib</div>
  ${formatter.formatDatetimeInTest(now)}
  </div>
`;

document.querySelector<HTMLButtonElement>("#counter")!;
