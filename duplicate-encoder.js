function duplicateEncode(word){
  regexp=new RegExp('(\w)/1','ig');
  return word.replace(regexp,'(');
}

console.log(duplicateEncode('ssdd'))
