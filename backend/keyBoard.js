import handleDecimal from "./handleDecimal.js";
import handleDelete from "./handleDelete.js";
import handleEquals from "./handleEquals.js";
import handleNumeralClick from "./handleNumeralClick.js";
import { handleOperation } from "./handleOperation.js";
import handleZero from "./handleZero.js";
import { clearMemory, memPlus, memSubtract, recallMemory, clearAll } from "./memoryFunctions.js";

const keyMap = {};

export default function keyBoard() {
  window.addEventListener('keydown', (e) => {
    if (e.key === "Shift" || e.key === "Control") {
      keyMap[e.key] = true;
    }

    // if (e.ctrlKey && e.shiftKey && e.key === '+') {
    if (keyMap["Shift"] && keyMap["Control"] && e.key === '+') {
      memPlus();
      return;
    }

    if (keyMap["Shift"] && keyMap["Control"] && e.key === '-') {
      memSubtract();
      return;
    }

    if (keyMap["Shift"] && keyMap["Control"] && e.key === 'Backspace') {
      clearMemory();
      return;
    }

    if (keyMap["Shift"] && keyMap["Control"] && e.key === 'Enter') {
      recallMemory();
      return;
    }

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
      handleNumeralClick(e)
      return;
    }


    if (e.key === '0') {
      handleZero()
      return;
    }

    if (e.key === '.') {
      handleDecimal()
      return;
    }

    if (["+", "-", "*", "/"].includes(e.key)) {
      e.preventDefault();
      handleOperation(e);
      return;
    }

    if (e.key === "Enter") {
      handleEquals();
      return;
    }

    if (e.key === 'Backspace') {
      handleDelete();
      return;
    }

    if (e.key === 'Escape') {
      clearAll(e);
      return;
    }

  })

  window.addEventListener('keyup', (e) => {
    if (e.key === "Shift" || e.key === "Control") {
      keyMap[e.key] = false;
    }
  })
}