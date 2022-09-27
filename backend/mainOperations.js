import { STATE } from "./state.js";
import floatFixer from "./floatFixer.js";

function add(num1, num2 = num1) {
  let temp, num1Mod, num2Mod, divisor;

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod > num2Mod ? num1Mod : num2Mod;
    temp = (parseFloat(num1) * num1Mod) + (parseFloat(num2) * num2Mod) / divisor;

  } else {
    temp = parseInt(num1) + parseInt(num2);
  }
  STATE._total = `${temp}`;
  STATE._valueOne = STATE._total;
  STATE._valueTwo = "0";
  return "1";
}

function subtract(num1, num2 = num1) {
  let temp, num1Mod, num2Mod, divisor

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod > num2Mod ? floatFixer(num1) : floatFixer(num2);
    temp = (parseFloat(num1) * num1Mod) - (parseFloat(num2) * num2Mod) / divisor;
  } else {
    temp = parseInt(num1) - parseInt(num2);
  }
  STATE._total = `${temp}`;
  STATE._valueOne = STATE._total;
  STATE._valueTwo = "0";
  return "1";
}

function multiply(num1, num2 = num1) {
  let temp, num1Mod, num2Mod, divisor

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod * num2Mod;
    temp = (parseFloat(num1) * num1Mod) * (parseFloat(num2) * num2Mod) / divisor;
  } else {
    temp = parseInt(num1) * parseInt(num2);
  }

  STATE._total = `${temp}`;
  STATE._valueOne = STATE._total;
  STATE._valueTwo = "0";
  return "1";
}

function divide(num1, num2 = num1) {
  if (num2 === "0") {
    return "0"
  };

  // Perform the division:
  let temp, num1Mod, num2Mod, divisor;
  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod * num2Mod;
    temp = ((parseFloat(num1) * num1Mod) / (parseFloat(num2) * num2Mod)) / divisor;
  } else {
    temp = parseInt(num1) / parseInt(num2);
  }

  // Check if the value is too small:

  STATE._total = `${temp}`;
  STATE._valueOne = STATE._total;
  STATE._valueTwo = "0";
  return "1";
}

export { add, subtract, multiply, divide };