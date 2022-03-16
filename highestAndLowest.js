
function highAndLow(numbers){
  let array = numbers.split(' ');
  return array.sort((a,b) => a-b)[0]+ ' '+ array.sort((a,b) => a-b)[array.sort((a,b) => a-b).length - 1];
}

console.log(highAndLow("1 2 3 4 5")); 
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));