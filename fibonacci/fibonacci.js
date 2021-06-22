const fibonacci = function(number) {
  let a=0, b=1, c, s=1;
  for (let i = 3; i<= number; i++){
    c = a + b;
    s = s + c;
    a = b;
    b = c;
  }
};

module.exports = fibonacci;
