const sumAll = function(sum) {
 let finalSum = 0;
  for (var i in sum) { finalSum += sum[i]; }
};

module.exports = sumAll;
