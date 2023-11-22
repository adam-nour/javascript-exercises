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

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
} else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
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
