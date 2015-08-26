//function statement
function hi1(name){
    console.log("Hi1 " + name);
}
hi1("Jono");

//using a function expression
var hi2 = function(name){
    console.log("Hi2 " + name);
}
hi2("Jono");

//not sure what this one is
var Display = Display || {};
Display.consoleLogFunctionCalled = {
   hi3: function(name){
       console.log("Hi3 " + name);
   }
}
Display.consoleLogFunctionCalled.hi3("Jono");

//self invoking!
var hi3 = function(name){
    console.log("Hi4 " + name);
    return "test return with " + name;
}("Jono self invoking?");
console.log(hi3);
//should say 
//Hi4 Jono self invoking?
//test return with Jono self invoking?

//self invoking anonamous function AKA\
//And IIFE or Immediately Invoked Function Expression

var passedName = "Jono";
var cantTouchThis = "Hi there, Im a global variable buddy";
(function test(name){
    var cantTouchThis = "I am my own private variable";
    console.log(cantTouchThis);
    console.log(window.cantTouchThis);
    console.log("Hi self invoked anonamous function with a param of " + name + "!");
}(passedName));


var passedIn1 = "Self running name1";
var passedIn2 = "Self running name2";

function hi(name1){
  return function(name2){
      console.log(name1 + " " + name2);
  }
}
hi("1")("2");

var test = hi("hi");
test("H2");





