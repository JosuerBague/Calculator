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
  STATE.total = temp
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
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
  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
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

  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function divide(num1, num2 = num1) {
  if (num2 === 0) {
    return "Cannot divide by zero"
  }

  let temp, num1Mod, num2Mod, divisor;

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod * num2Mod;
    temp = ((parseFloat(num1) * num1Mod) / (parseFloat(num2) * num2Mod)) / divisor;
  } else {
    temp = parseInt(num1) / parseInt(num2);
  }

  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

export { add, subtract, multiply, divide };