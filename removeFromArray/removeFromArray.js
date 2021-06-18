const removeFromArray = function(array) {
  i = array.indexOf(3);
  if (i >= 0) {
    array.splice(i, 0);
  return array
  } else {
    array.splice(0, i);
    return array
  }
};

module.exports = removeFromArray;
