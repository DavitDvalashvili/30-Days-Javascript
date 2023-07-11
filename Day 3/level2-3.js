//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter base: ');
let height = prompt('Enter height: ');
let area = 0.5 * parseFloat(base) * parseFloat(height);
console.log(area);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Enter side A: ');
let sideB = prompt('Enter side B: ');
let sideC = prompt('Enter side C: ');
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(perimeter);

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter length: ');
let width = prompt('Enter width: ');
let Perimeter = 2 * (parseFloat(length) + parseFloat(width));
let Area = parseFloat(length) * parseFloat(width);
console.log(perimeter, area);


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Enter radius: ');
let pi = Math.round(Math.PI * 100) / 100;
let circleArea = pi * parseFloat(radius) ** 2;
let circumference = 2 * pi * parseFloat(radius);
console.log(circleArea);
console.log( circumference);
let a = 1,
  b = 2,
  c = -2;
let a1 = a / a,
  b1 = b / a,
  c1 = c / a;
let x_intercept = -c1 / b1;
console.log(x_intercept);
console.log(y_intercept);
let slope1 = Math.round(((0 - y_intercept) / (x_intercept - 0)) * 100) / 100;
console.log(slope);
console.log(slope1);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope = (10-2)/(6-2);
console.log(slope)
let slope2 = (2-10)/(2-6);
console.log(slope2)

//Compare the slope of above two questions.
console.log(slope==slope2);

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
let a = 1;
let b = 6;
let c = 9;
let bSquared = Math.abs(b) ** 2;
let fourAC = 4 * a * c;
let twoA = 2 * a;
let bSquaredMinusFourAC = bSquared - fourAC;
let sqrt = Math.sqrt(bSquaredMinusFourAC);
let operation1 = Math.round(((-b + sqrt) / twoA) * 100) / 100;
let operation2 = Math.round(((-b - sqrt) / twoA) * 100) / 100;
operation1 === operation2
  ? console.log(`x = ${operation1}`)
  : console.log(`x = ${operation1} or x = ${operation2}`);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter hours: ');
let ratePerHour = prompt('Enter rate per hour: ');
let pay = parseFloat(hours) * parseFloat(ratePerHour);
console.log(` Your pay is $${pay}`);

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt('Enter your name: ');
yourName.length > 7
  ? console.log('your name is long')
  : console.log('your name is short');

//Compare your first name length and your family name length and you should get this output.
let firstName = "Davit"
let familyName = "Dvalashvili"
console.log(firstName.length < familyName.length);

console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 39;
let yorAge = 35;
let howOlder = myAge-yorAge;
console.log(`I am ${howOlder} years older than you.`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yourBirthYear = parseFloat(prompt('Enter the year you were born: '));
let age = new Date().getFullYear() - yourBirthYear;
if (age >= 18) {
  console.log(`You are ${age}. You are allowed to drive.`);
} else {
  console.log(
    `You are ${age}. You will be allowed to drive in ${18 - age} years.`
  );
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let personAge = parseFloat(prompt('Enter your age: '));
let remainingYears = 100 - personAge;
let remainingSeconds = remainingYears * 365.25 * 24 * 60 * 60;
console.log(
  `You have lived ${
    age * 365.25 * 24 * 60 * 60
  } seconds. You have ${remainingSeconds} seconds more to live reach 100 years`
);

// Create a human readable time format using the Date time object
let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = dateInfo.getMonth();
let date = dateInfo.getDate();
let hour = dateInfo.getHours();
let minutes = dateInfo.getMinutes();
// Solution 1
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
// solution 2
console.log(`${date}-${month}-${year} ${hour}:${minutes}`);
// solution 3
console.log(`${date}/${month}/${year} ${hour}:${minutes}`);


//level 3

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let DateInfo = new Date();
let Year = dateInfo.getFullYear();
let Month = dateInfo.getMonth();
let Date = dateInfo.getDate();
let Hours = dateInfo.getHours();
let Minutes = dateInfo.getMinutes();

function format(a) {
  if (a < 10) {
    return (a = `0${a}`);
  }
  return a;
}
let formatHours = format(hours);
let formatMinutes = format(minutes);
console.log(`${Year}-${Month}-${Date} ${formatHours}:${formatMinutes}`);
