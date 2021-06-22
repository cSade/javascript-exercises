const fibonacci = function(number) {
  let numbers = [0,1];
  for(let i =2; i < number; i++){
    let a = numbers[i - 2];
    let b = numbers[i - 1];
    numbers.push(a+b);
}
return numbers [number - 1];
};

module.exports = fibonacci;
