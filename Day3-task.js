//  Global task array with initial empty slots

let tasks = [];

let taskCount = 0; // Index tracker



// add a task and callback 

function addTask(task, callback) 

    {

        tasks[taskCount]=task; 

        taskCount++;             

        callback();              

    }



// Callback function to print tasks



function showTask() 

    {

        console.log("Tasks:");

        for (let i=0;i<taskCount;i++) 

            {

                console.log((i + 1)+ "."+tasks[i]);

            }

    }



//  Arrow function example

let arrow=()=> 

    {

        console.log("Welcome to the Task");

    };

    arrow();





// add multiple tasks 

function ManyTasks(allTasks) 

    {

        for (let i = 0; i < allTasks.length; i++) 

            {

                tasks[taskCount] = allTasks[i];

                taskCount++;

            }

        showTask();

    }

    



//  Variable scope example



let globalVar = "Global variable";

function scopeCheck() 

    {

        let localVar = "Function variable";

        if (true) 

            {

                let blockVar = "Block variable";

                console.log(blockVar);   

            }

            console.log(localVar);     

            console.log(globalVar);    

    }

    scopeCheck();

    console.log(globalVar);       
