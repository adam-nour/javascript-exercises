const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(args) {
  return Number(args.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
};

const multiply = function(args) {
  return Number(args.reduce((accumulator, currentValue) => accumulator * currentValue, 1));
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
