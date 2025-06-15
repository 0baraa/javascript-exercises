const fibonacci = function(num) {
  let first = 0;
  let second = 1;
  let fibonacci;

  if(num === 1) {
    return 0;
  } else if(num === 2) {
    return 1;
  }

  for(let i = 3; i <= num; i++) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
  }

  return fibonacci;

};

// Do not edit below this line
module.exports = fibonacci;
