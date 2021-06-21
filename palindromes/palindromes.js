const palindromes = function (str) {
 let re = /[\W_]/g;
 let strLo = str.toLowerCase().replace(re, '');
 let reverseStr = strLo.split('').reverse().join('');
 return reverseStr === strLo;
};

module.exports = palindromes;
