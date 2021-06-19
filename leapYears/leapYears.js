const leapYears = function(num) {
  if (num%4===0) {
    return true;
  } else if !(num%4===0) {
    return false;
  }
};

module.exports = leapYears;
