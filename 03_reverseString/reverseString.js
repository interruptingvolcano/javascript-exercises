function reverseString(string) {
  const splitMyArray = string.split('')
  const reverseArray = splitMyArray.reverse();
  const joinArray = reverseArray.join('');

  return joinArray;
}

// Do not edit below this line
module.exports = reverseString;
