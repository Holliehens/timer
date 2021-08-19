let interval = 0;

const alarmTimes = process.argv.slice(2);
  //  THE ABOVE CODE IS THE SAME AS THIS:
  //
   //  for (let i = 2; i < input.length; i++) {
   //  alarmTimes.push(parseInt(input[i]));
  //    }

for (let i = 0; i < alarmTimes.length; i++) {
  setTimeout(() => {
    if (alarmTimes[i] > 0 && !isNaN(alarmTimes[i])) {
      process.stdout.write(`BEEP\n`);
      process.stdout.write(alarmTimes[i] + ' seconds\n');
    }
  }, Number(alarmTimes[i]) * 1000);
  
}

 