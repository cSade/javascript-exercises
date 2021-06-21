const ftoc = function(tempFa) {
  tempFa = (tempFa - 32) * 5/9;
  let tempFaRounded= Math.round(tempFa * 10) / 10;
  return tempFaRounded;
};

const ctof = function(tempCe) {
  tempCe = (tempCe * 9/5) + 32;
  let tempCeRounded = Math.round(tempCe * 10) / 10;
  return tempCeRounded;

};

module.exports = {
  ftoc,
  ctof
};
