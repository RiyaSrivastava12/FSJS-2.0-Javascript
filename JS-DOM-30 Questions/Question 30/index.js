// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;

        default:
            console.log("Please enter correct value");
            result = null;
            break;
    }

    if (result) {
        console.log(`${num1}${operator}${num2} is : ${result}`)
    }


}

let num1 = 5;
let num2 = 50;
let operator = "*";
calculator(num1, operator, num2)