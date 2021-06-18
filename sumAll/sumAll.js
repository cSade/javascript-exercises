const sumAll = function(min, max) {
 return ((max-min)+1) * (min + max) / 2;
}
function finalSum(arr) {
    return sumAll(Math.min(...arr), Math.max(...arr));
}

module.exports = sumAll;
