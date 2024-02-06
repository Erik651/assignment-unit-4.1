console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName("Your Name"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}
console.log(addNumbers(1,2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;

}
console.log(multiplyThree(1,2,3))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
  return false};
}

console.log(isPositive(-3));
console.log(isPositive(3));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [1,3,5,6,7,-7,-6,5,3,1];
function getLast(param) {
  return param[param.length - 1];

}
console.log(array);
console.log(getLast(array))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for(let i = 0; i < array.length; i++)
  if (value === array[i]) {
    return true;
  }
  {
    return false;
  }

}

console.log(find(7,array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let string = "Hello";
function isFirstLetter(letter, string) {
  if(letter === string.charAt(0))
  {return true;
  }
  {
return false;
  }

}
console.log(isFirstLetter("W", string))

// 9. Function to return the sum of all numbers in an array
//let sum = 0;
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for (let i = 0; i < array.length; i++){
  sum += array[i];
}
  // TODO: return the sum
  return sum;
};

console.log(sumAll(array));
//console.log(sum);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
//let newPositiveArray = [];


function allPositive(array) {
  let newPositiveArray = array.filter(number => number > 0);
  
return newPositiveArray;
};
//let newPositiveArray = [];
console.log(allPositive(array));

//console.log(newPositiveArray);
console.log(array);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
 
//let triangleHeight = (3);
//let triangleLength = (2);

// This is a problem from Edabit. This function is used to find the area of a triangle. 
//Inside the function using the formula to find triangle area, pass the argument values to the f, assign the equation to a variable,
// return the variable, and call the function with the parameters

function findTriangleArea(triangleHeight, triangleLength) {
  let triangleArea = (triangleHeight * triangleLength / 2);
console.log(`To find area of a triangle, enter height: ${triangleHeight} and triangle length ${triangleLength}`);
  return triangleArea;

};

console.log(`Area of triangle :`,findTriangleArea(354,7));


function findSecondsFromMinutes(minutes){
  let seconds = (minutes * 60);
console.log(`Tell me how many seconds are in ${minutes} minutes?`);
  return seconds;
}

console.log(findSecondsFromMinutes(5),`seconds.`);


function daysOld(yearsOld){
  let days = (yearsOld * 365);
console.log('calculate',yearsOld,`years into total days lived.` )
  return days;
};

console.log(`Day's lived :`,daysOld(49));


function findCircumference(radius){
  let circumference = (2 * 3.14 * radius);
console.log(radius, `Radius of circle.`);
  return circumference;
};

console.log('Circumference of circle :', findCircumference(43));


function convertKm2Mph(km){
  let mph = (.62137119 * km);
console.log(`How many miles are in ${km} kilometers? `);
  return mph;
};

console.log(`miles :`, convertKm2Mph(100))

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
