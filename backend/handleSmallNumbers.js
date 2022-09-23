export default function handleSmallNumbers(input) {
  const val = input.toString();
  const base = val.slice(0, val.indexOf('e')).replace('.', '');
  const exponent = parseInt(val[val.indexOf('-') + 1]);
  const calcMaxDigits = 16;

  // If the value is too small i.e. 2.0907515812876897e-7:
  const relevantDigits = base.slice(0, calcMaxDigits - exponent);

  let padZero = '';
  for (let i = exponent - 1; i > 0; i--) {
    padZero += '0';
  }

  let formattedNumber = '0.' + padZero + relevantDigits;

  return formattedNumber
}