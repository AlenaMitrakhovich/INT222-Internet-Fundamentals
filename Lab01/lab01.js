/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*********************************************************************************
* INT222 - Lab 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Alena Mitrakhovich Student ID: 115 297 152 Date: September 15, 2016
*
*********************************************************************************/

/***********************
* Task 1: Student Info
***********************/

var studName = "Alena Mitrakhovich";
var noCourses = 3;
var program = "Computer Programming & Analysis";
var job = true; 

console.log("My name is " + studName + " and I'm in " + program + " program. I'm taking " + noCourses + " courses in this semester. ");

var workResult;

if (job == 1){
  workResult = "have";
}
else
  workResult = "don't have";

console.log("My name is " + studName + " and I'm in " + program + " program. I'm taking " + noCourses + " courses in this semester and I " + workResult + " a part-time job now.");

/**********************************
* Task 2: Birth and Graduate Year
**********************************/

var curYear = 2016;

var age = prompt("Please enter your age:");

var ageResult = curYear - age;

console.log("You were born in the year of " +ageResult + ".");

var yearsStudy = prompt("Enter the number of years you expect to study in the college:");

var gradResult = curYear + +yearsStudy;

console.log("You will graduate from Seneca college in the year of " +gradResult + ".");

/**********************************************
* Task 3: Celsius and Fahrenheit Temperatures
**********************************************/

var celcius = 35;

console.log(celcius + "°C is " +(((celcius * (9/5) + 32)).toFixed(2)) + "°F");

var fahrenheit = 80;

console.log(fahrenheit + "°F is " +(((fahrenheit - 32) * (5/9)).toFixed(2)) + "°C");

/*******************************
* Task 4: Even and Odd Numbers
*******************************/

for(var x = 0; x <= 10; x++){
  if (x % 2 == 0)
    console.log(x +" is even");
  else
    console.log(x +" is odd");
}

/***********************************
* Task 5: Larger or Largest Number
***********************************/

function largerNum(num1, num2){
  if (num1 > num2)
    return num1;
  else
    return num2;
}

var greaterNum = function(num1, num2){
  if (num1 > num2)
    return num1;
  else
    return num2;
}

console.log("The larger number of 10 and 20 is " + (largerNum(10, 20)));
console.log("The larger number of 30 and 40 is " + (largerNum(30, 40)));
console.log("The larger number of 100 and 200 is " + (largerNum(100, 200)));
console.log("The larger number of 300 and 400 is " + (largerNum(300, 400)));

/********************
* Task 6: Evaluator
********************/

function evaluator(){
  var sum = 0;
  
  for(var i = 0; i < arguments.length; i++){
     sum += arguments[i];
  }

  var average = sum/arguments.length;

  if (average >= 50)
    var evalResult = true;
  else
    var evalResult = false;
  
  return evalResult;
}

console.log("The result of your scores is " + evaluator(50, 40, 30, 20));
console.log("The result of your scores is " + evaluator(50, 50, 50));
console.log("The result of your scores is " + evaluator(90, 80));

/*****************
* Task 7: Grader 
*****************/

var grader = function(score){
  if(score >= 80)
    grade = "A";
  else if (score >= 70 && score < 80)
    grade = "B";
  else if (score >= 60 && score < 70)
    grade = "C";
  else if (score >= 50 && score < 60)
    grade = "D";
  else if (score < 50)
    grade = "F";
  
  return grade;
}

console.log("Your grade is: " + grader(80));
console.log("Your grade is: " + grader(70));
console.log("Your grade is: " + grader(40));

/*************************
* Task 8: Show Multiples 
*************************/

var num = 0;
var numMultiples = 0;

function showMultiples(num, numMultiples){
  for(var x = 1; x <= numMultiples; x++){
    console.log(num + " x " + x + " = " + (num * x));
  }
  console.log("\n");
}

for(var count = 0; count < 3; count ++){
var num = prompt("Enter a number: ");
var numMultiples = prompt("Enter a multiplier: ");
(showMultiples(num, numMultiples));
}