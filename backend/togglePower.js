import { clearAll } from "./memoryFunctions.js";
import { STATE } from "./state.js"

export default function togglePower() {
  const memoryIndicator = document.querySelector(".display-memory");
  const mainDisplay = document.querySelector(".display-main");

  if (STATE._isPowered) {
    memoryIndicator.style.opacity = 1;
    mainDisplay.style.opacity = 1;
  } else {
    clearAll
    memoryIndicator.style.opacity = 0;
    mainDisplay.style.opacity = 0;
  }

  STATE._isPowered = !STATE._isPowered;
}