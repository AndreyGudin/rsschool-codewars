function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays===null) return 0;
  if (!arrayOfArrays.length) return 0;
  if (arrayOfArrays.includes(null,0)) return 0;
  let array = arrayOfArrays.map(item=>item.length).sort((a,b)=>a-b);
  for(let i=1;i<array.length;i++){
    if (array[i-1]===0) return 0;
    else if (array[i]-array[i-1] > 1) return array[i-1]+1;
    }
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));