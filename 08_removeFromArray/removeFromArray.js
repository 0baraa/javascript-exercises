const removeFromArray = function(arr, ...unwanted) {
  return arr.filter(num => !unwanted.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
