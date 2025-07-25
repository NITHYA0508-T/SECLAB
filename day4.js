//array of object://
//what is an Array of object?//
 //an array of object is a collection where each element is an object with properties , this is
// used to fgroup related data togather in structured way //
 let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100
    },
    sum:function(){
     let total=this.subject.dbms+this.subject.java;
     return total;  
}
 }
 console.log(details.name);
 console.log(details["totalmark"]);
 console.log(details.subject.dbms);
 console.log(details.subject["java"]);
 console.log(details.sum());
 // object destructuring is a syntax in java script in javascript that//
 //allows you to extract values from//
 //object and assign them to variables in a clean and readable way//
 let person={
    job:"softwaretester",
    salary:2500
 }
 const{job:firstkey,salary:secondkey}=person
 console.log(firstkey+" "+secondkey);
 let arr=new Array(1,2,"three");
 console.log(arr[2]);
 //array destructuring//
 let arr2=["js",true,false];
 const[name,b1,b2]=arr2;
 console.log(name);
 //filter-returns a new array containing only the elements that match a condition//
 let Students=[
    {name:"nithya",grade:"A"},
    {name:"neha",grade:"B"},
    {name:"puja",grade:"A"},
 ]
 let gradeStudents=Students.filter(Students=>Students.grade==="A")
 console.log(gradeStudents);
 
 let names=["asha","bala","chennai"];
names.splice(1,1,"david");//remove 1 item at index 1, insert "david"
console.log(names);

 
