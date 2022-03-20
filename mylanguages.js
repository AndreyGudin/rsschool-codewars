function myLanguages(results) {
  return Object.entries(results).sort((a,b) => b[1] - a[1]).filter((a)=> a[1] > 59).map(a => a[0]);
}
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))