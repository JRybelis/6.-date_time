const now = new Date();
const before = new Date('January 13 2005 7:00:00');

console.log(typeof now);

// year, months, day, time:
console.log('The current year:', now.getFullYear());
console.log('The current month:', now.getMonth()+1);
console.log('The current day of the week:', now.getDay());
console.log('The current day of the month:', now.getDate());
console.log('The current hour of the day:', now.getHours());
console.log('The current minute of the hour:', now.getMinutes());
console.log('The current second of the minute:', now.getSeconds());

//timestamps:
console.log('The timestamp: ', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


const difference = now.getTime() - before.getTime();
console.log(difference);

const minutes = Math.round(difference / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);
console.log(`I have been alive for ${days} extra days.`);

//converting timestamps into date objects
const timestamp = 1615317675675;
console.log(new Date(timestamp));
