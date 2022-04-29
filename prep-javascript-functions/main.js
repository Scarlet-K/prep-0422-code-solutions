function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutes = convertHoursToMinutes(3);
console.log('hoursToMinutes:', hoursToMinutes);

function getGreeting(name) {
  return name + 'any phrase?';
}

var concatString = getGreeting('Do you mean ');
console.log('concatenateString:', concatString);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiply = addAndMultiplyBy5(5, 4);
console.log('addAndMultiply:', addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(5, 4);
console.log('multiplyAndDivide:', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(5, 4);
console.log('subtractTwoNumbers:', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(4);
console.log('getCircleCircumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Scarlet', 'Kim');
console.log('getFullName:', fullName);

function cube(number) {
  return Math.pow(number, 2);
}

var cubeANumber = cube(3);
console.log('cube:', cubeANumber);
