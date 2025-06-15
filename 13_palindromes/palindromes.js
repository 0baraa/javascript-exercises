const palindromes = str => {
  const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleaned = str
    .toLowerCase()
    .split('')
    .filter(char => validChars.includes(char))
    .join('');
  
  return cleaned === cleaned.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
