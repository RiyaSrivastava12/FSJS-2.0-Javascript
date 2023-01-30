/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

let inputMonth = prompt("Enter the current month");
inputMonth = inputMonth.toLowerCase();

switch (inputMonth) {
    case "december":
    case "january":
    case "february":
        alert(`Season is Winter`);
        break;

    case "september":
    case "october":
    case "november":
        alert(`Season is Autumn`);
        break;

    case "march":
    case "april":
    case "may":
        alert(`Season is Spring`);
        break;

    case "june":
    case "july":
    case "august":
        alert(`Season is Summer`);
        break;

    default:
        alert("Incorrect Value!!")
        break;
}
