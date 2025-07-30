let sentence = "Hello world";
let result = sentence
  .split(" ")
  .map(w => w.split("").reverse().join(""))
  .join(" ");
console.log(result);
