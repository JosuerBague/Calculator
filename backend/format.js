export default function format(data) {
  // If the data contains a decimal
  let [whole, fract] = truncate(data).split('.');
  whole = addCommas(whole);

  if (fract) {
    return [whole, fract].join('.'); 0
  }

  return whole;
}

export function truncate(data) {
  let maxIndex = data.includes('.') ? 16 : 15;

  let valueAfterMaxIndex = data.slice(maxIndex + 1, maxIndex + 2);
  let valueAtMaxIndex = data.slice(maxIndex, maxIndex + 1);
  console.log(valueAfterMaxIndex, valueAtMaxIndex, data)


  return `${data.slice(0, maxIndex)}${valueAfterMaxIndex >= 5 ? parseInt(valueAtMaxIndex) + 1 : valueAtMaxIndex}`
}


function addCommas(data) {
  let temp = '';
  let chunks = [];

  for (let i = data.length - 1; i >= 0; i--) {
    temp = data[i] + temp;

    if (temp.length === 3) {
      chunks.push(temp);
      temp = '';
    }

    if (temp.length && i === 0) {
      chunks.push(temp)
    }
  }

  return chunks.reverse().join(',')
}


