function sortByBit(arr) {
  return arr.sort(function(a,b){
    let countOneA=a.toString(2),countOneB=b.toString(2);
    if (countOneA==='0') return -1;
    if (countOneB==='0') return 1;
    if ((countOneA.match(/1/g).length) <(countOneB.match(/1/g).length))
      return -1;
    if ((countOneA.match(/1/g).length)>(countOneB.match(/1/g).length))
      return 1;
    if ((countOneA.match(/1/g).length)===(countOneB.match(/1/g).length))
    {
      if (+('0b'+countOneA).toString(10) < +('0b'+countOneB).toString(10)) return -1;
      if (+('0b'+countOneA).toString(10) > +('0b'+countOneB).toString(10)) return 1;
    }
    return 0;
  });
}

console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]));