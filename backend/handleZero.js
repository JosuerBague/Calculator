export default function handleZero() {
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo === '0' ? '0' : STATE.valueTwo + '0';
  }
  else {
    STATE.valueOne = STATE.valueOne === '0' ? '0' : STATE.valueOne + '0';
  }
}