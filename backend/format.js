export default function format(data) {
  // If the data contains a decimal
  let [whole, fract] = data.split('.');

  whole = addCommas(whole);
  return data;
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