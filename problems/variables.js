"use strict"
// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1986
console.log (birthYear)

//  * Store a future year in a variable.
let futureYear = 2020
console.log (futureYear)

//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let ageMin = 33;
let ageMax = 34;
console.log ("I will be" + " " +  ageMin  +  " " + "or" + " " + ageMax + " " +  "in"  +  " " + futureYear)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let age = 34;
//  * Store a maximum age in a constant variable.
const maxAge = 40;
//  * Store an estimated snack amount per day (as a number).
let snackPerday = 4;
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log ("I will need" + " " + snackPerday + " " + "snacks every day" + " " + "to last me until I turn" + " " + maxAge)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 10;
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let circumferenceResult = (2 * Math.PI * radius)
console.log ("The circumference is" + " " + circumferenceResult)

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp
let areaOfCircle = (Math.PI * radius**2) 
console.log ("The area is" + " " + areaOfCircle)

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = 25;
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempInFahrenheit = (tempInCelsius * 1.8 + 32)
console.log (tempInCelsius + " " + "is" + " " + tempInFahrenheit)
//  * Now store a fahrenheit temperature into a variable.
let fahrenheit = 100;
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
let celsius = ((fahrenheit - 32) * 5 / 9)
console.log (fahrenheit + " " + "is" + " " + celsius)


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let alicesGrade = 95;
//  * Store Bob's grade on a test to a variable
let bobsGrade = 65;
//  * Store Cam's grade on a test to a variable
let camsGrade = 76;
//  * Find the average grade of all students
let average = (alicesGrade + bobsGrade + camsGrade) / 3
console.log ("The average of Alice's," + " " + "Bob's," + " " + "and" + " " + "Cam's" + " " + "grades is" + " " + average)
//  * Store Dee's grade on a test to a variable
let deesGrade = 40;
//  * Find the average grade of all students
let mean = (alicesGrade + bobsGrade + camsGrade + deesGrade) / 4
console.log (("The mean of Alice's," + " " + "Bob's," + " " + "Cam's," + " " + "and " + " " + "Dee's" + " " + "grades is" + " " + mean))
//  * Print out if Dee's grade is higher than the class average
let deesResults = 89
let classAvg = (alicesGrade + bobsGrade + camsGrade + deesResults) / 4
console.log (("The class average of Alice's," + " " + "Bob's," + " " + "Cam's," + " " + "and " + " " + "Dee's" + " " + "grades is" + " " + classAvg))


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

let n = 227
let lastDigit = n % 10
console.log ("The last digit of" + " " + n + " " + "equals" + " " + lastDigit) 


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

let y = 2;
let bobsAge = 12;
let alicesAge = y * bobsAge;

let y1 = 3;
let alicesAge1 = y1 * bobsAge;

console.log("Alice is either" + " " + alicesAge + " " + "or" + " "  +  alicesAge1)




// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 20;
let numberOfDogs = 60;
let dogs = .75 * numberOfDogs
let cats = .25 * numberOfCats
console.log("There are" + " " + dogs + " " + "dogs" + " " + "and" + " " + cats + " " + "cats" + " " + "in the class")




// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

//function checkLeapYear(year) {
    //if (year % 4 === 0)
    //if (year % 400 === 0) return leapyear;
    //if (year % 100 === 0) return leapyear;{
        //console.log(year + 'is not a leap year');
    //} else {
        //console.log(year + 'is a leap year')
    //} //let years1 = 1900
    //let years2 = 2000
 


//}
//console.log(leapyear(2000));

//function leapYear(year) {
    //if (year % 400 === 0) return leapYear;
    //if (year % 100 === 0) return leapYear;
    //return year % 4 === 0;
//}
//console.log(leapyear(2000));

function leapyear(year) {
if (year % 100 === 0 && year % 400 !== 0)

return "This is not a leap year";
else
return "This is a leap year";



//return (leapyear + str) || (leapyear + str2)
}
console.log(leapyear(2016));
console.log(leapyear(2012));
console.log(leapyear(1900));
console.log(leapyear(2000));


//function greeting(name) {
//let str = "Hello";
//return str + name;
//}
//console.log(greeting("Auredy"));



// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
    let num1 = 2
    let num2 = 5
     let num3 = num1 * num2
     console.log(num3) 


     // ```console.log(num3) // 10



// b. 
//     ```js
     let str = 'jel' 
    str += 'lo'
    console.log(str)
//     ``` console.log(str) // jello

// c. 
//     ```js
    let string =  'My favorite number is ';
    let number = 42
   let sentence = string + number
   console.log(typeof(sentence))
//     ``` console.log(typeOf(sentence)) // 'My favorite number is 42' (after running the code we realized it was asking us what type of value)


