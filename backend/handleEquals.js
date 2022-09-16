import { STATE } from "./state.js";
import { operate, setOperator } from "./handleOperation.js";

export default function handleEquals() {
  if (STATE.isError) {
    return
  }
  
  if (STATE.operation && STATE.lastKeyAnOperator) {

    let temp = STATE.valueOne;
    operate(STATE.operation, STATE.valueOne);
    STATE.valueTwo = temp;
  }

  STATE.lastKeyAnOperator = true;
  STATE.postOperation = true;
  console.log(STATE)
}