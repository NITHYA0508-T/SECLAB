let x=10;

function sendmessage(){

    console.log("welcome to js");

    console.log(x);

}

sendmessage();

console.log(x);



function check(){

    if(true){

        let name="webdevelopment";

        console.log(name);

    }

    

}

check()

//call back function in js is a function that is passed as an arugument to another function,and it is exeuted after the completion of that function

function first(){

    console.log("This is my first function")

}

first()

function second(Callback){

    console.log("This my second function")

    setInterval(Callback,2000);

    

}

second(first);

let count=0;

let input=()=>{

    count++;

    console.log(count)

    if(count<5){

        input();



    }

}

input();
