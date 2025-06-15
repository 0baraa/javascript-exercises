const add = function(op1, op2) {
	return op1 + op2;
};

const subtract = function(op1, op2) {
	return op1 - op2;
};

const sum = function(arr) {
  return arr.reduce((acc, num) => acc += num, 0);
};

const multiply = function(arr) {
    if(arr.length === 0) {
      return 0;
    }

    return arr.reduce((acc, num) => acc *= num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let result = 1;

  for(let i = 1; i <= num; i++) {
    result *= i
  }

  return result;
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
