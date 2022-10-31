function removeFromArray(...args) {
  const myArray = args[0];
  return myArray.filter(item => !args.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
