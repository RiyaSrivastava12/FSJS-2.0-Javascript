// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
let fileName = prompt("Enter your File Name");

function extensionName(fileName) {
    const index = fileName.indexOf(".");
    const extn = fileName.slice(index);
    console.log(`Extension of the file ${fileName} is : ${extn}`)
}
extensionName(fileName);
