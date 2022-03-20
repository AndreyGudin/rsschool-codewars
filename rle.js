var runLengthEncoding = function(str){
  return str ? str.match(/([a-z])\1+|([a-z])| |./gi).map(a => [a.length,a[0]]) : [];
}

console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))