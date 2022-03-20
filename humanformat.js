function formatDuration (input) {
  let format = {'year': 0,'day': 0,'hour':0,'minute':0,'second':0};
  let output = '';
  format.second = input%60;
  format.minute = input <60 ? 0 : Math.floor(input/60%60);
  
  if (format.minute > 59) {
    format.hour = Math.floor(format.minute/60);
    format.minute = format.minute%60;
  }

  format.hour += input <3600 ? 0 : Math.floor(input/3600);

  if (format.hour > 23) {
    format.day = Math.floor(format.hour/24);
    format.hour = format.hour%24;
  }

  if (format.day > 365) {
    format.year = Math.floor(format.day/365);
    format.day = format.day%365;
  }

  format

  for (let key in format){
    if ((format[key] > 1)&&!(key === 'second')) output += `${format[key]} ${key}s, `;
    if ((format[key] === 1)&&!(key === 'second')) output += `${format[key]} ${key}, `;
    if (key === 'second'){
      if (format[key] > 1) output=output.replace( /, $/,` and ${format[key]} ${key}s`);
      if (format[key] === 1) {
        if (output.includes(',')) output=output.replace( /, $/,` and ${format[key]} ${key}`);
        else output += `${format[key]} ${key}`;        
      }
    }
  }


  output=output.replace(/, $/,'');
  output=output.replace(/^and /,'');
  output=output.replace(/^ | $/,'');
  if (!(output.includes('and'))) output = output.replace(/,(?=[^\,]*$)/,' and');

  
  return output;

}

console.log(formatDuration(1));