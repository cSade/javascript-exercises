const leapYears = function(num) {
  if (num%4==0 && num == 0) {
    return true;
  } else if (num%4==0 && num >=1) {
    return false;
  }
};

module.exports = leapYears;
