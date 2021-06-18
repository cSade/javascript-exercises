const sumAll = function(sum) {
 function add (a, b) {
  return a + b;
 }
  return function (sum) {
   return sum.reduce(add);
  };
};

module.exports = sumAll;
