import { clearAll } from "./memoryFunctions.js";
import { STATE } from "./state.js"

export default function togglePower(e) {
  const memoryIndicator = document.querySelector(".display-memory");
  const mainDisplay = document.querySelector(".display-main");

  STATE._isPowered = !STATE._isPowered;

  if (!STATE._isPowered) {
    clearAll(e);
    memoryIndicator.style.opacity = 0;
    mainDisplay.style.opacity = 0;
  } else {
    memoryIndicator.style.opacity = 1;
    mainDisplay.style.opacity = 1;
  }


  console.log(STATE._isPowered);
}