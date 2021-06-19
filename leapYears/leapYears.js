const leapYears = function(num) {
  if (num%4===0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
