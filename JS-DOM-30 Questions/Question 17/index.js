//17. Write a program which tells the number of days in a month

function noOfDaysInMonth(year, month) {
    const days = new Date(year, month, 0).getDate();
     return days;
}

console.log(noOfDaysInMonth(2021, 2))
console.log(noOfDaysInMonth(2022, 10))
console.log(noOfDaysInMonth(2023, 10))


