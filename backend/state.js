export const STATE = {
  total: 0,
  memoryTotal: 0,
  overwrite: false,
  postOperation: false,
  valueOne: 0,
  valueTwo: 0,
  operation: null,
  lastKeyAnOperator: false, // Tracks if the last key pressed was an operator
  isPowered: false,

  set total(val) {
    this.total = val;
  },

  get total() {
    return this.total;
  },

  set memoryTotal(val) {
    this.setMemoryTotal = val;
  },

  get memoryTotal() {
    return this.memoryTotal;
  },

  set overwrite(val) {
    this.overwrite = val;
  },

  get overwrite() {
    return this.overwrite;
  },

  set postOperation(val) {
    this.postOperation = val;
  },

  get postOperation() {
    return this.postOperation
  },

  set valueOne(val) {
    this.valueOne = val;
  },

  get valueOne() {
    return this.valueOne;
  },

  set valueTwo(val) {
    this.valueTwo = val;
  },

  get valueTwo() {
    return this.valueTwo;
  },

  set operation(val) {
    this.operation = val;
  },

  get operation() {
    return this.operation;
  },

  set lastKeyAnOperator(val) {
    this.lastKeyAnOperator = val;
  },

  get lastKeyAnOperator() {
    return this.lastKeyAnOperator;
  },

  set isPowered(val) {
    this.isPowered = val;
  },

  get isPowered() {
    return this.isPowered;
  },
}
