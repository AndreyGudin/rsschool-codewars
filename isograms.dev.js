"use strict";

function isIsogram(str) {
  var array = str.split('');
  var item;

  while (array.length != 0) {
    item = array.shift();

    for (var i = 0; i < array.length; i++) {
      if (item === array[i].toLowerCase()) return false;
    }
  }

  return true;
}

console.log(isIsogram(""));