const sumAll = function(start, end) {
  const bothNumbers = typeof start === 'number' && typeof end === 'number';
  const bothIntegers = Number.isInteger(start) && Number.isInteger(end);
  const bothNonNegative = start >= 0 && end >= 0;

  if (!bothNumbers || !bothIntegers || !bothNonNegative) {
    return 'ERROR';
  }

  if (start > end) [start, end] = [end, start];

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
