function isIsogram(str) {
  let array = str.split('');
  let item;
  while(array.length != 0){
    item = array.shift();
    for (let i = 0; i <  array.length; i++){
      if (item === array[i].toLowerCase()) return false;
    }
  }
  return true;
}

console.log(isIsogram(""));