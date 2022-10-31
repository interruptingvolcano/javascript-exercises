function sumAll(num1, num2) {
  if (typeof num1 != 'number' || typeof num2 !== 'number') {
    return 'ERROR';
  } else if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (num1 < num2) {
    for (i = num1 + 1; i <= num2; i++) {
    num1 += i;
  } return num1;
  } else if (num1 > num2) {
    for (i = num2 + 1; i <= num1; i++) {
    num2 += i;
  } return num2; 
  } 
}

// Do not edit below this line
module.exports = sumAll;
