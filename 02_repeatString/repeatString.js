const repeatString = function(string, num) {
  myStr = string;
  for (i = 1; i < num; i++) {

    myStr += string;
  }
  if (num === 0) {
    myStr = '';
  } else if (num < 0) {
    myStr = 'ERROR';
  }
  return myStr;
};


// Do not edit below this line
module.exports = repeatString;



