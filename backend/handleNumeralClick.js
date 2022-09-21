import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function handleNumeralClick(e) {
  // const mainDisplay = document.querySelector('.display-main');
  // const maxDisplayLength = 16; // Digits only

  // const currDisplay = mainDisplay.textContent.replace(/\W+/g, '');

  // if (currDisplay.length <= maxDisplayLength) {
  //   // Check if the number clicked is zero.
  //   +e.target.textContent === 0 ? handleZero() : handleNonZero(e.target.textContent);
  //   STATE.lastKeyAnOperator = false;
  //   STATE.overwrite = false;
  //   STATE.postOperation = false;
  //   handleDisplay();
  //   console.log(STATE)
  // }

  // If the click happens post memory plus or minus (overwrite === true),
  // change valueTwo:
  if (STATE._overwrite) {
    changeValue('_valueTwo', e.target.textContent);
    STATE._lastKeyAnOperator = false;
    STATE._overwrite = false;
    STATE._postOperation = false;
    handleDisplay();
    return;
  }

  // If there is no stored operation change valueOne:
  if (!STATE._operation) {
    changeValue('_valueOne', e.target.textContent);
  }
  else {
    changeValue('_valueTwo', e.target.textContent);
  }
  console.log(STATE)

  STATE._lastKeyAnOperator = false;
  STATE._overwrite = false;
  STATE._postOperation = false;
  handleDisplay();
}

function changeValue(name, input) {
  STATE[name] = STATE[name] === '0' ? input : STATE[name] + input;
}



export default handleNumeralClick;