const removeFromArray = function(array) {
  let removeNum = ''
  let i = array.indexOf(removeNum);
  if (i >= 0) {
    array.splice(i, 1);
  return array
  } 
};

module.exports = removeFromArray;
