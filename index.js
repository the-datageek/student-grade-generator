const prompt = require("prompt-sync")(); //imported this to be able to use prompt

let score = prompt("Enter Marks "); //prompts the user to input student marks
let grade;

if (score<=100 && score>=79) 
 grade = "A";
else if (score<=79 && score >=60)
 grade = "B";
else if (score<=59 && score >=49)
 grade = "C";
else if (score<=49 && score >=40)
 grade = "D";
else if (score<=40 && score >=0)
 grade = "E";

 console.log(grade); //outputs the grade
 