const fibonacci = function(number) {
  let numbers[0,1];
  for(let i =2; i < number; i++){
    numbers[i] = numbers[i - 2] + numbers[i - 1];
}
return numbers;
};

module.exports = fibonacci;
