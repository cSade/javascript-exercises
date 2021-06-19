const leapYears = function(num) {
  if (num%4==0) {
    return true;
  } else if (num%4 >= 1) {
    return false;
  }
};

module.exports = leapYears;
