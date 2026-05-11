var v = 10;
console.log(v);
var v = 20; //redeclaration is allowed . Not a good thing
console.log(v);
v = "flipper"; // reassignment.
console.log(v);


function var_fun() {
    var v = "soni"; //can redeclare name in function scope
    console.log(v);
}
var_fun();
v = "flipper_again"; // reassignment.
console.log(v);


// let usage
let name = "harish";
console.log(name);
//let name = "soni" ; //cannot redeclare name in block scope
name = "new harish";  // name can be reassigned
console.log(name);

function test() {
    let name = "soni";
    console.log("Inside function, name can be redeclared  " + name); //let name can be  redeclared in function scope
}
test()
console.log(name); // value within block scope is printed and not the function scope


const c = "JACK";
console.log(c);
// c = "soni"; // cannot be reassigned
// console.log(c);

function const1() {
    //c = "soni"; //cannot be  reassigned in function scope also
    console.log(c);
}
const1()




