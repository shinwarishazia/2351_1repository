

var let = 100;  // this is my bar  Number
console.log(let);
var name = "Dev Ed";  // This is the name display  string

var checkout = false;  // Boolean

var box = "shazia";

console.log(box);


global_variable = 10;
print //The value of the global variable is global_variable
console.log("The value of the global variable is: 10");

block_variable = 20;
print //value of a block variable is block_variable
console.log("The value of the block variable is: 20");


string_variable = 30;
print //The value of the string variable is string_variable 
console.log("The value of the string variable is: 30");

const object_variable = {
  "name": "John Tim",
  age: 30,
  city: "New York"
};
console.log("The value of the object variable is:", object_variable);
//The value of the object variable is: { name: 'John Tim', age: 30, city: 'New York' }

object_variable['name'] = 'John Tim'
object_variable['age'] = 30
object_variable['city'] = 'New York'
print //The value of the object variable is object_variable


//Create at least one function
function testExample() {
  var greeting = "Hi! My name is Shazia";
  console.log(greeting);
}

testExample();

//Pass parameters in


//Pass parameters out

//Invoke your functions.
function calculateArea(radius) {
  return Math.PI * radius ** 2;
}
// Invoke the function
const radius = 5;
const area = calculateArea(radius);
console.log(area); //Output: 78.53981633974483

//Create an object with multiple properties
obj = {
  name: "Shazia",
  age: 19,
  city: "San Antonio",
  occupation: "Wed Designer",
  hobbies: ["basketball", "hiking", "reading"]
}
//Event
const button = document.getElementById("button");
button.addEventListener("click", function() {
});

//Method
Method.call = function(args) {
  return this.func.apply(this, args);
};
const method = new Method('sayHello', function() {
  console.log('Hello!');
});
method.call(); // Hello!