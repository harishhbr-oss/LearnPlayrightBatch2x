console.log(greeting);

var greeting = "Hello";
console.log(greeting);
console.log(typeof greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// Hoistig in let 
//console.log(aaa); //Cannot access 'aaa' before initialization
let aaa = "Pramod";
console.log(aaa);