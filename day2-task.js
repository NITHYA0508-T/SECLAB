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





//while loop



let i = 1;

while (i <= 10) 

    {

        console.log(i);

        i++;

    }



//do-while loop



let input;

do 

{

    input = prompt("Enter number greater than 10:");

} 

while (input <= 10);



//for loop



let n = 5;

let sum = 0;

for (let i=1;i<=n;i++) 

    {

        sum += i;

    }

        console.log("Sum:", sum);



//nested for loop



for (let i = 1; i <= 5; i++) 

    {

        for (let j = 1; j <= 10; j++) 

            {

                console.log(i + " x " + j + " = " + (i * j));

            }
        }










        //break condition



for(let i=2;i<=20;i++) 

    {

        let isPrime = true;

        for (let j=2;j<i;j++) 

            {

                if (i%j===0)

                    {

                        isPrime = false;

                        break;

                    }

            } 

            if(isPrime) 

                {

                    console.log("Prime numbers:",i);

                    break;

                }

    }



//continue



for (let i = 1; i <= 20; i++) 

    {

        if (i%2===0) 

            {

                continue;

            }

            console.log(i);

    }
