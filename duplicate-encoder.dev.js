"use strict";

function duplicateEncode(word) {
  regexp = new RegExp('(\\w)(?=.*?\\1)', 'g');
  regexp3 = new RegExp('(\\w)\\1+', 'g');
  regexp4 = new RegExp('(.)\\1+', 'g');
  regexp2 = new RegExp('(\\w).*?\\1', 'g');
  return word.replace(regexp4, '(');
}

console.log(duplicateEncode('success'));