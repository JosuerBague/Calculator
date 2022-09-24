import { STATE } from "./state.js";
import format from "./format.js";

export default function handleDisplay(name) {
  const mainDisplay = document.querySelector(".display-main");

  // If there is an error do nothing, unless all clear is clicked.
  if (STATE._error) {
    return
  }

  mainDisplay.textContent = format(STATE[name]);
}
