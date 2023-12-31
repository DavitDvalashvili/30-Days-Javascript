//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge  = '30 Days Of JavaScript';

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(5,15));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

//Split the string into an array using split() method
console.log(challenge.split(""));

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const text = "30 Days Of JavaScript";
console.log(text.replace("JavaScript", "Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
console.log(text.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(text.charCodeAt("J"));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(text.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(text.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(text.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(text.startsWith(30));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(text.endsWith("Script"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(text.match("a"));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let concat = '30 Days of '.concat("Javascript");
console.log(concat);

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(text.repeat(2));
