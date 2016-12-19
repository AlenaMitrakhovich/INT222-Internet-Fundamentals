/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/********************************************************************************
* INT222 – Lab 02
* I declare that this lab is my own work in accordance with Seneca Academic Policy. No part of this
* lab has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Alena Mitrakhovich Student ID: 115 297 152 Date: September 29, 2016
*
********************************************************************************/

/*********
* Step 1
*********/

var e1;
var e2;
var e3;
var e4;
var e5;
var e6;
var e7;
var str;

/*********
* Step 2
*********/

function capFirstLetter (change){
  var changeFirst = change.substr(0, 1);
  changeFirst = changeFirst.toUpperCase();
  x = change.length - 1;
  var changeLast = change.substr(1,x);
  changeLast = changeLast.toLowerCase();
  var changeFinal = changeFirst + changeLast;
  return changeFinal;
}

e1 = prompt("Enter your first name: ", "Alena");

e1 = capFirstLetter(e1);

/*********
* Step 3
*********/

var getAge = function (year){
  var age = 0;
  var curYear = (new Date()).getFullYear();
  age = curYear - year;
  return age;
}

e2 = prompt("Enter your birth year: ", 1990);

e2 = getAge(e2);

/*********
* Step 4
*********/

e3 = prompt("Enter your college name: ", "Seneca College");

e3 = e3.split(" ");
  
e3[0] = capFirstLetter(e3[0]);
e3[1] = capFirstLetter(e3[1]);

var final = e3[0] + (" ") + e3[1];
e3 = final;

/*********
* Step 5
*********/

e4 = prompt("Enter 5 favourite sports(lower case, separated by comma): ", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/g, "soccer");
e4 = e4.split(",");
e5 = prompt("Enter another favourite sport: ", "formula1");
e4.push(e5);

/*********
* Step 6
*********/

for (var count = 0; count < e4.length; count ++){
  e4[count] = e4[count].toUpperCase();
}

e4 = e4.sort();

/*********
* Step 7
*********/

function getDateString(dateConvert){
  
  dateConvert = dateConvert.toLocaleString();
  dateConvert = dateConvert.split(",");
  dateConvert = dateConvert[0];
  dateConvert = dateConvert.split("/");
  dateConvert[0] = dateConvert[0] < 10 ? "0" + dateConvert[0] : dateConvert[0];
  dateConvert[1] = dateConvert[1] < 10 ? "0" + dateConvert[1] : dateConvert[1];
  dateConvert = dateConvert[2] + "-" + dateConvert[0] + "-" + dateConvert[1];
  
  return dateConvert;
}

e6 = new Date();

e7 = getDateString(e6);

/*********
* Step 8
*********/

str = "\nUser info: \n\n" + "name (e1): " + e1 + "\n" + "age (e2): " + e2 + "\n" + "school (e3): " + e3 + "\n" + "favorite sports (e4): " + "\n" + "\t" + e4[0] + "\n" + "\t" + e4[1] + "\n" + "\t" + e4[2] + "\n" + "\t" + e4[3] + "\n" + "\t" + e4[4] + "\n" + "\t" + e4[5] + "\n" + "current date (e7): " + e7 + "\n";

console.log(str);