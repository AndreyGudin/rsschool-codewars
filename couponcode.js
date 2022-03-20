function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode!=correctCode) return false;
  return Date.parse(currentDate) < Date.parse(expirationDate) ? true : false;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));