const removeFromArray = function(array) {

  let i = array.indexOf(3);
  if (i >= 0) {
    array.splice(i, 1);
  return array
  } else if (i >= array.length) {
    array.splice(i, i)
    return array
  }
};

module.exports = removeFromArray;
