import { STATE } from "./state.js";
import format from "./format.js";

export default function handleDisplay(name) {
  const mainDisplay = document.querySelector(".display-main");

  // If there is an error do nothing, unless all clear is clicked.
  if (STATE.isError) {
    return
  }

  if (STATE._overwrite) {
    mainDisplay.textContent = format(STATE[name]);
    return;
  }

  // If the click happens post operation:
  if (STATE.postOperation) {
    mainDisplay.textContent = format(STATE[name]);
    return
  }

  // If there is no saved operator, then change the first operand:
  if (!STATE.operation) {
    mainDisplay.textContent = format(STATE[name]);
    return
  }
  // If there is a saved operator, but not post operation,
  // Change the 2nd value:
  if (STATE.operation && !STATE.postOperation) {
    mainDisplay.textContent = format(STATE[name]);
  }
}
