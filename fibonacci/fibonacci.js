const fibonacci = function(number) {
  const numbers = [0,1];
  for(var i = 2; i < number; i++){
    const a = numbers[i - 2];
    const b = numbers[i - 1];
    numbers.push(a+b);
}
return numbers [number];
};

module.exports = fibonacci;
