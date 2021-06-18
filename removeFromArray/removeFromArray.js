const removeFromArray = function(array) {
  i = array.indexOf(3);
  if (i >= 0) {
    array.splice(i, 1);
  return array
};

module.exports = removeFromArray;
