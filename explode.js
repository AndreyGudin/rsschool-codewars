function explode(s) {
  return s.split("").map(function(item){
    let number = +item;
    let chr = item
    if (number === 0) return "";
    while (number-1 != 0){
      item+=chr;
      number--;
    }
    return item;
  }).join('');
}
console.log(explode("10236"));