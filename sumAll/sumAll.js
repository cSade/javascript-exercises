const sumAll = function(array) {
 let sum = 0;
 for (let i = 0; i < array.length; sum += array[i++]);
 return sum;
};

module.exports = sumAll;
