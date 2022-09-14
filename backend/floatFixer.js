/* 
  Returns a multiple of ten (10, 100, 1000, 10000).
*/

export default function test(data) {
  let temp = '1'
  for (let i = data.toString().length - 1; i >= 0; i--) {
    temp += '0';
  }
  return +temp
}
