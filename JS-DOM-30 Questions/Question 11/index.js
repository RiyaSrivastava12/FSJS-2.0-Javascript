//Q.11 Use the Date object to do the following activities

// - What is the year today?
const date = new Date();
const year = date.getFullYear(); //GET YEAR
console.log(`The current Year is ${year}`);


// - What is the month today as a number?
const month = date.getMonth(); // Month starts from 0 & ends at 11 ,so to get exact month number as per our calender just add 1 in the month variable
console.log(`The month number as per JS is ${month} and as per our calender is ${month + 1}`);


// - What is the date today?
const dateToday = date.getDate();
console.log(`Current date is ${dateToday}`);


// - What is the day today as a number?
const day = date.getDay();
console.log(`Current Day is ${day}`) // Day starts from 0 and ends at 6. 0 - sunday, 1 - Monday ,..... 6 - saturday.


// - What is the hours now?
const hrs = date.getHours();
console.log(`Current Hours are ${hrs}`);


// - What is the minutes now?
const mins = date.getMinutes();
console.log(`Current minutes are ${mins}`);


// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const ms = date.getTime(); // getTime() method will return milliseconds elapsed from Jan 1, 1970
const secondsElapsed = ms / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are ${secondsElapsed}`);