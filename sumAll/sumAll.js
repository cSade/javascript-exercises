const sumAll = function(sum) {
 let finalSum = 0;
 for (let i = 0; i < sum.length; finalSum += sum[i++]);
};

module.exports = sumAll;
