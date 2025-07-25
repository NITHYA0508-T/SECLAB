let tasks = [];
let taskCount = 0; 
function addTask(task, callback) 
    {
        tasks[taskCount]=task; 
        taskCount++;            
        callback();              
    }
function showTask() 
    {
        console.log("Tasks:");
        for (let i=0;i<taskCount;i++) 
            {
                 console.log((i + 1)+ "."+tasks[i]);
            }
    }
let arrow=()=> 
  {
     console.log("Welcome to the Task");
  };
arrow();
function ManyTasks(allTasks) 
    {
       for (let i = 0; i < allTasks.length; i++) 
           {
               tasks[taskCount] = allTasks[i];
               taskCount++;
           }
        showTask();
    }
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
