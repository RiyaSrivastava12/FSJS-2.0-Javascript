/*15. Write a program which can give grades to students according to theirs scores:
- 80-100, A
- 70-79, B
- 60-69, C
- 50-59, D
- 0-49, F*/

function grades (marks){
if(marks >= 80 && marks <= 100){
    return `You have obtained A grade `
}else if(marks >= 70 && marks <= 79){
    return `You have obtained B grade `
}else if(marks >= 60 && marks <= 69){
    return `You have obtained C grade `
}else if(marks >= 50 && marks <= 59){
    return `You have obtained D grade.`
}else if(marks>=0 && marks  <=49){
    return `You have obtained F grade.`
}else {
    return `Entered incorrect marks `
}
}
const totalMarks = grades(98);
console.log(totalMarks);
