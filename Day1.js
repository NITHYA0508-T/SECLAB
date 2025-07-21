function addition(a, b)
{
    console.log("Addition_result= " + (a + b)); 
}
function subtraction(a, b)
{
    console.log("Subtraction_result= " + (a - b)); 
}
function multiplication(a, b)
{
    console.log("Multiplication_result= " + (a * b)); 
}
function divition(a, b)
{
    console.log("Div_result = " + (a / b)); 
}
function modules(a, b)
{
    console.log("Result = " + (a % b)); 
}
let a = parseFloat( prompt("Enter value 1: "));
let b = parseFloat( prompt("Enter value 2: "));
console.log("addition (1)");
console.log("subtraction (2)");
console.log("multiplication (3)");
console.log("division (4)");
console.log("modulus (5)");
var choice = parseInt( prompt("Enter your choice: "));
switch (choice) 
{
    case 1:
        addition(a,b)
        break;
    case 2:
        subtraction(b,a);
        break;
    case 3:
        multiplication(a,b);
        break;
    case 4:
        if (b == 0)
        {
            console.log("Error: Cannot be multiplied by Zero");
            break;
        }

        else
        {
            div(a,b);
            break;
        }

    case 5:
        modules(a,b);
        break;

    default:
        console.log("Invalid Input");
        break;
}
