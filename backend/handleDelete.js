import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

export default function handleDelete() {
  if (STATE._overwrite) return;
  if (STATE._postOperation) return;

  const name = STATE._operation ? "_valueTwo" : "_valueOne";

  if (STATE[name] === "0") return;

  if (STATE[name].length === 1) {
    STATE[name] = "0";
  } else {
    STATE[name] = STATE[name].slice(0, STATE[name].length - 1);
  }

  handleDisplay(name)
  console.log(STATE)
}