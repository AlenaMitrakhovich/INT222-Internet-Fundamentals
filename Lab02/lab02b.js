/********************************************************************************
* INT222 – Lab 02
* I declare that this lab is my own work in accordance with Seneca Academic Policy. No part of this
* lab has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Alena Mitrakhovich Student ID: 115 297 152 Date: September 29, 2016
*
********************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null },
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', program ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/******************************************************
 * Start your code here. Do not change the code above.
 ******************************************************/
// task 1
var last = courses.pop();
console.log("Course " + last.code + " was deleted from the array (courses)");

var ibc233 = {
code: "IBC233",
name: "iSERIES Business Computing",
hours: 4,
url: "https://scs.senecac.on.ca/~ibc233/"
};

var oop244 = {
code: 'OOP244',
name: 'Introduction to Object Oriented Programming',
hours: 4,
url: 'https://scs.senecac.on.ca/~oop244/'
};

var int222 = {
code: 'INT222',
name: 'Internet Fundamentals',
hours: 4,
url: 'https://scs.senecac.on.ca/~int222/'
};

var dbs201 = {
code: 'DBS201',
name: 'Introduction to Database Design and SQL',
hours: 4,
url: 'https://scs.senecac.on.ca/~dbs201/'
};

console.log("Adding new course objects into the array (courses)\n\n");
courses.push(ibc233);
courses.push(oop244);
courses.push(int222);
courses.push(dbs201);

console.log("Course objects in the array (courses): ");
for (var count = 0; count < courses.length; count++){
    console.log(courses[count].code + ", "+ courses[count].name + ", " + courses[count].hours + " hours/week" + ", website: " + courses[count].url);
}

// task 2
    
function Students(name, dob, sid, program, gpa){
    this.name = name;
    this.dob = new Date(dob);
    this.sid = sid;
    this.program = program;
    this.gpa = gpa;
}

Students.prototype = student;

var date1 = "1999-09-11";
var date2 = "1992-01-18";
var date3 = "1994-03-02";
var date4 = "1992-01-13";
var student1 = new Students("John Smith", date1, "010456101", "CPA", 4);
var student2 = new Students("Jim Carrey", date2, "012345678", "CPD", 3.5);
var student3 = new Students("Justin Bieber", date3, "0987654321", "CAN", 3);
var student4 = new Students("Justin Trudeau", date4, "123456789", "CAN", 4);

var students = [
student1,
student2,
student3,
student4,
];

console.log("\nStudent objects in the array(students): ");

for (var counter = 0; counter < students.length; counter++){
    console.log(counter + ": " + students[counter].toString());
}


