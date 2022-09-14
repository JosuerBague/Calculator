/* 
  Returns a multiple of ten (10, 100, 1000, 10000).
*/

export default function floatFixer(data) {
  let decimalPart = data.split('.')[1] || '';
  let temp = '1'
  for (let i = decimalPart.length - 1; i >= 0; i--) {
    temp += '0';
  }
  return +temp
}
