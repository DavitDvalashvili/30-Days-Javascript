//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Davit"
const lastName = "Dvalashvili"
const country = "Georgia"
const city = "Tbilisi"
const age = 26;
const isMarried = false;
const year = new Date().getFullYear();

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//Check if type of '10' is equal to 10
console.log("10" === 10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//Boolean value is either true or false.
//JavaScript coerces values to either truthy : values that evaluate to true or falsy : values that evaluate to false.

//Write three JavaScript statement which provide truthy value.
undefined
null
NaN
0
//"An empty string: no space between the quotes i.e." ('' || " " || ``)
false;

//Write three JavaScript statement which provide truthy value.
 "string"
 30;
 true;
 30<30;

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 != 4);
console.log(4 === 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//Find the length of python and jargon and make a falsy comparison statement.
let python = "python";
let jargon = "jargon";
python.length < jargon.length;

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log((4 > 3 && 10 > 12))
console.log(!(4 === '4'))

//Use the Date object to do the following activities
let date = new Date();

//What is the year today?
console.log(date.getFullYear())

//What is the month today as a number?
console.log(date.getMonth());

//What is the date today?
console.log(date.getDate());

//What is the day today as a number?
console.log(date.getDay());

//What is the hours now?
console.log(data.getHours());

//What is the minutes now?
console.log(date.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsSince1970 = Math.floor(date.getTime() / 1000);
console.log(secondsSince1970);







