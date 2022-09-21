console.log("main.js loaded!");

var userHeight = prompt("Your height(in meters)");
var userWeight = prompt("Your weight(in kg)");

var bmi = userWeight  / (userHeight  * userHeight )


if(bmi < 18.5 ){
    alert("You are underweight");
}

if(bmi = 18.5 && bmi < 25){
    alert("You are normal");
}

if(bmi = 25 && bmi < 30){
    alert("You are overweight");
}

if(bmi > 30){
    alert("You are obese");
}

console.log("Program finished!");