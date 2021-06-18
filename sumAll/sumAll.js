const sumAll = function(array) {

 for (let i = 0, sum = 0; i < array.length; sum += array[i++]);
 return array;
};

module.exports = sumAll;
