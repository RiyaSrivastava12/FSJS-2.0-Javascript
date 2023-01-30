//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = ["youtube", "twitter", "pw skills", "discord", "instagram", "pw skills", "linkedin"];
const lastOccurrence = arr.lastIndexOf("pw skills");
const firstOccurrence = (arr.length - 1) - arr.reverse().lastIndexOf("pw skills");
const output = `First occurrence index : ${firstOccurrence}
Last occurrence index : ${lastOccurrence} `;
console.log(output);