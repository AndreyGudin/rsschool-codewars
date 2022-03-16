function disemvowel(str) {
  return str.match(/[^AEIOU]/gi).join('');
}

console.log(disemvowel("This website is for losers LOL!"));