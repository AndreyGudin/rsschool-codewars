function unluckyDays(year){
  let j = new Date(year,0,1);
  let fr = 0;
  for (let month=0; month <12; month++){
    for (let day=1; day <=31; day++)
    {
      j = new Date(year,month,day);
      if (j.getMonth()!=month) continue;
      if ((j.getDay() === 5)&& (day === 13)) fr++;
    }
  }
  return fr;
}

console.log(unluckyDays(2819));