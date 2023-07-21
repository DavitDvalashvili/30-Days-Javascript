//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = number(prompt("enter your age"));
if(age>18){
    console.log("your are old enough to drive")
} else {
    console.log(`you are left with ${18-age} year(s) to drive`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input
let myAge = 27;
let Age = number(prompt("enter your age"));
if (age < myAge) {
    console.log(`i'm older than you with ${myAge - Age}`)
} else {
    console.log(`you are ${Age - myAge} years older than me`)
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");

}
//ternary
(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = number(prompt("enter a number"))
if(number % 2 === 0){
 console.log(`${number} is even`)
} else if (num % 2 !== 0) {
    console.log(`${number} is odd`)
}

//Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = Number(prompt("enter your score"));
switch (true) {
    case score > 80:
        console.log("A");
        break;
    case score > 70:
        console.log("B");
        break;
    case score > 60:
        console.log("C");
        break;
    case score > 50:
        console.log("D");
        break;
    case (score < 50):
        console.log("F");
        break;
    default:
        console.log("no score assigned")
}
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("enter month to check seasons");
switch (month) {
    case "september":
    case "october":
    case "November":
        console.log("the season is Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        console.log("the season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("the season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("the season is Summer");
        break;
    default:
        console.log("invalid Month")
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let weekDay = prompt("enter weekDay to check if it's a weekend")
if (weekDay == "saturday" || weekDay == "sunday") {
    console.log(`${weekDay} is a weekend day`)
} else if (weekDay == "monday" || weekDay == "tuesday" || weekDay == "wednesday" || weekDay == "thursday" || weekDay == "friday") {
    console.log(`${weekDay} is a work day`)
} else {
    console.log("invalid weekDay")
}

//Write a program which tells the number of days in a month.
let Month = prompt("enter month to check number of days");
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${Month} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${Month} has 30 days`)
        break;
    case "febuary":
        console.log(`${Month} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}