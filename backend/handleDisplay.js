import { STATE } from "./state.js";
import format from "./format.js";
import { clearAll } from "./memoryFunctions.js";

export default function handleDisplay(name) {
  const mainDisplay = document.querySelector(".display-main");

  // If there is an error do nothing, unless all clear is clicked.
  if (STATE._error) {
    return
  }

  if (name === "zero-div") {
    mainDisplay.textContent = "Really? Divide by Nothing?"
    setTimeout(() => {
      mainDisplay.textContent = STATE._valueTwo;
      clearAll();
    }, 1500)
    return;
  }

  mainDisplay.textContent = format(STATE[name]);
}
