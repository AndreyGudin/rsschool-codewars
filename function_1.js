function calculate(...args1) {
  return function(...args2){
    return args1.reduce((prev,curr)=> prev+curr,0)+args2.reduce((prev,curr)=> prev+curr,0)
  }
}

console.log(calculate(1)(2))