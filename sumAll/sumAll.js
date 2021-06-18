const sumAll = function(sum) {
 let finalSum = 0;
 for (let i = 0; i < sum.length; finalSum += sum[i++]);
 return finalSum;
};

module.exports = sumAll;
