const removeFromArray = function(array) {
  i = array.indexOf(i);
  if (i >= 0) {
    array.splice(i, 1);
  return array
  } else {
    array.splice(0, i);
    return array
  }
};

module.exports = removeFromArray;
