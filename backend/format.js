import handleSmallNumbers from "./handleSmallNumbers.js";
import { STATE } from "./state.js";

export default function format(data) {
  // If the data does not exceed 16 digits:
  if (data.replace('.', '').length <= 16) {
    return addCommas(data)
  }

  // If the data display length exceeds 16 digits and contains a 
  // positive exponent:
  if (data.includes('+')) {
    STATE._error = true;
    return addCommas(data)
  }

  // If the data display length exceeds 16 and contains a 
  // negative exponent call handleSmallNumbers with 
  // truncate:
  if (data.includes('-')) {
    let formattedAns = addCommas(truncate(handleSmallNumbers(data)));
    return formattedAns;
  }

  // If the data display length exceeds 16 but there is no exponent:
  if (data.replace('.', '').length > 16) {
    return addCommas(truncate(data));
  }
}

export function truncate(data) {
  const maxIndex = 16;
  const valueAtMaxIndex = data[maxIndex];
  const valueAfterMaxIndex = data[maxIndex + 1];
  const indexOfDecimal = data.indexOf('.');

  // If the value at maxIndex is not a nine simply round:
  if (valueAtMaxIndex !== '9') {
    return `${data.slice(0, maxIndex)}${valueAfterMaxIndex >= 5 ? parseInt(valueAtMaxIndex) + 1 : valueAtMaxIndex}`
  }

  else {
    let indexNonNine = maxIndex;

    while (data[indexNonNine] === '9' && indexNonNine !== 0) {
      indexNonNine--
    }

    if (indexNonNine > indexOfDecimal && indexOfDecimal !== undefined) {
      return `${data.slice(0, indexNonNine)}${parseInt(data[indexNonNine]) + 1}`
    }

    else if (indexNonNine < indexOfDecimal && indexOfDecimal !== undefined) {
      let padZero = '';

      for (let i = indexNonNine; i < indexOfDecimal; i++) {
        padZero += '0'
      }

      return `${data.slice(0, indexNonNine)}${parseInt(data[indexNonNine]) + 1}${padZero}`
    }
  }
}


function addCommas(data) {

  let [whole, fract] = data.split('.');
  let temp = '';
  let chunks = [];

  for (let i = whole.length - 1; i >= 0; i--) {
    temp = whole[i] + temp;

    if (temp.length === 3) {
      chunks.push(temp);
      temp = '';
    }

    if (temp.length && i === 0) {
      chunks.push(temp)
    }
  }

  let formatted = chunks.reverse().join(',');

  if (fract) {
    return [formatted, fract].join('.');
  } else if (!fract && data.includes('.')) {
    return formatted + '.';
  } else {
    return formatted;
  }
}


