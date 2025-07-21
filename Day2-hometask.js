//Simple if statement

let age = 20;
if (age >= 18)
    {
        console.log("You are eligible to vote.");
    }

//if-else blocks

let number = 5;
if (number % 2 === 0)
    {
        console.log("Even number");
    }  
    else 
    {
        console.log("Odd number");
    }

//mutiple conditions with else-if

let mark = 85;
if (mark >= 90) 
    {
        console.log("Grade A");
    } 
    else if (mark >= 75) 
        {
            console.log("Grade B");
        } 
        else if (mark >= 60) 
            {
              console.log("Grade C");
            } 
            else 
            {
                console.log("Fail");
            }

//Switch statements

let day = 3;
switch(day) 
    {
        case 1: 
            console.log("Monday"); break;
        case 2:   
            console.log("Tuesday"); break;
        case 3: 
            console.log("Wednesday"); break;
        case 4: 
            console.log("Thursday"); break;
        case 5: 
            console.log("Friday"); break;
        case 6: 
            console.log("Saturday"); break;
        case 7: 
            console.log("Sunday"); break;
        default: 
            console.log("Invalid day");
    }

//

