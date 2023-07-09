//Using console.log() print out the following statement:
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = "10";
let numTen = 10;
console.log(typeof(ten) == typeof(numTen));
ten = parseInt(ten);
console.log(typeof(ten) == typeof(numTen));

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let number = parseFloat("9.8");
console.log(number == 10);
number = Math.ceil(number);
console.log(number == 10);

//Check if 'on' is found in both python and jargon
let python = 'python';
let jargon = 'jargon';
console.log(python.includes('on') && jargon.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence2 ="I hope this course is not full of jargon";
console.log(sentence2.includes("jargon"));

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101));

//Generate a random number between 50 and 100 inclusively. 
console.log(Math.floor(Math.random()*50)+50);

//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*256));

//Access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
let randomCharacter = str[randomIndex];
console.log(randomCharacter);

//Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t2\n74\t1\t4\t16\t64\n5\t1\t5\t25\t125');

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence3 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence3.substr(31, 23));
