//M1 Assignment
var let = 100;  // this is my bar  Number
console.log(let);
var name = "Dev Ed";  // This is the name display  string

var checkout = false;  // Boolean

var box = "shazia";

console.log(box);

//2.4 Assignment
global_variable = 10;
print //The value of the global variable is global_variable
console.log("The value of the global variable is: 10");
{
let block_variable= 20;
block_variable=block_variable + 2;
console.log("The value of the block variable is:" + block_variable);
print //value of a block variable is block_variable
}

string_variable = "Shazia";
print //The value of the string variable is string_variable
console.log("The value of the string variable is:" + string_variable);

const object_variable = {
  name: "John Tim",
  age: 30,
  city: "New York",
};
console.log("The value of the object variable is:", object_variable);
//The value of the object variable is: { name: 'John Tim', age: 30, city: 'New York' }

object_variable['name'] = 'John Tim'
object_variable['age'] = 30
object_variable['city'] = 'New York'
print //The value of the object variable is object_variable

//3.4 Assignment
//Create at least one function
function testExample() {
  var greeting = "Hi! My name is Shazia";
  console.log(greeting);
}

testExample();

//multiple fuctions with parameter in and parameter out
// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}
// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
      return 'Error: Division by zero';
  } else {
      return a / b;
  }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.6666666666666667
console.log(divide(5, 0)); // Output: Error: Division by zero

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

//4.5 Assignment
// Declare variables
var firstName = "Shazia";
var lastName = "Shinwari";
var age = 19;

// Create a concatenated string variable
var fullName = firstName + " " + lastName + ", " + age + " years old.";

// Output to the console
console.log(fullName);

//switch statement
let day = 3;
switch (day) {
 case 1:
    console.log("Monday");
    break;
 case 2:
    console.log("Tuesday");
    break;
 case 3:
    console.log("Wednesday");
    break;
 case 4:
    console.log("Thursday");
    break;
 case 5:
    console.log("Friday");
    break;
 case 6:
    console.log("Saturday");
    break;
 case 7:
    console.log("Sunday");
    break;
 default:
    console.log("Invalid day");
}
//"if" Conditional statement
var age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//string method
function createString(length, char) {
  let result = '';
  for (let i = 0; i < length; i++) {
     result += char;
  }
  return result;
 }
let myString = createString(5, 'a');
console.log(myString); // Output: "aaaaa"
 
//5.4 Assignment: Loops and DOM
//For loop examples
for (let i = 0; i < 3; i++) {
    console.log(i);
}

const names = ["Ed", "Shazia", "Maria", "Alia", "Ali", "Tahmena"];
for (name of names) {
  console.log(name);
}
//while loop
let i = 0;

while (i < 4) {
    console.log(i);
    i++;
}
//Change CSS with JS
var style = document.createElement('style');
style.innerHTML = `
 body {
    background-color: lightblue;
 }
`;

document.head.appendChild(style);
// Change the background color to lightpink
style.sheet.cssRules[0].style.backgroundColor = 'lightpink';
//Change CSS based upon a variable value
function changeCSSVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}
// Example usage
changeCSSVariable("--background-color", "red");

//6.4 Assignment
//Object
const user = {
   name: "Shazia",
   age: 19,
   married: false,
   purchases: ["phone", "watch", "car"]
};

console.log(user.purchases);

//Object Method
const customer = {
   name: 'John Doe',
   email: 'john.doe@example.com',
   save: function() {
     // Save the customer to the database.
     console.log(`Saving customer ${this.name} to the database.`);
   }
 };

 customer.save();

//Array
const fruits1 = ['Apple', 'Orange', 'Banana'];
fruits1.push("Hey more fruits are added")
console.log(fruits1);
//Array Method
Array.prototype.forEach = function(callback) {
   for (let i = 0; i < this.length; i++) {
     callback(this[i], i, this);
   }
 };

 const fruits2 = ['Apple', 'Orange', 'Banana'];
fruits2.forEach((fruit, index, array) => {
  console.log(`${fruit} is at index ${index} in the array ${array}`);
});