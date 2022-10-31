function ftoc(f) {
  tempC = (f - 32) * 5/9;
  if (tempC - Math.floor(tempC) !== 0) {
    roundTempC = tempC.toFixed(1);
    return Number(roundTempC);
  } else {
    return Math.trunc(tempC);
  }
}

function ctof(c) {
  tempF = (c * 9/5 + 32)
    if (tempF - Math.floor(tempF) !== 0) {
      roundTempF = tempF.toFixed(1);
      return Number(roundTempF);
    } else {
      return Math.trunc(tempF);
    }
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
