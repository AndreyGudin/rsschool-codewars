function numberOfPairs(gloves)
{
  let array = gloves.sort();
  array
  let pair = 0;
  for (let i=0;i<array.length;i++){
    if (array[i]===array[i+1]) {pair++;i++;}
  }
  return pair;
}

console.log(numberOfPairs(['gray','black','purple','purple','gray','black','gray','black']));