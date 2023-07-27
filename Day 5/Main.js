let countries = ["Georgia", "Russia", "Spain", "China", "Germany"];
let webtechs = ["html", "css", "javascript", "react", "c++", "sql"];

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs 
//array in to this file. Access both file in main.js file
console.log(countries);
console.log(webtechs);


//First remove all the punctuations and change the string to array and count the number of words in the array
//let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
text.split("");
console.log(text.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("meat");

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("sugar");

//modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("tea")] = "green tea";

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("ethipia");
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (techList.includes("ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("ethipia");
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (techList.includes("SASS")) {
    console.log("SASS")
} else {
    countries.push("SASS");
}

//Concatenate the following two variables and store it in a fullStack variable.
//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//const backEnd = ['Node','Express', 'MongoDB']
let frontend = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backend = ['Node', 'Express', 'MongoDB'];
console.log(frontend.concat(backend));

//The following is an array of 10 students ages:
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
let minAge = ages.sort()[0];
let maxAge = ages.sort()[ages.length - 1];
console.log(minAge);
console.log(maxAge);

//Find the median age(one middle item or two middle items divided by two)
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);

//Find the average age(all items divided by number of items)
let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}
console.log(avgAge);

//Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the 
//first ten countries from the countries array
let ma = abs(minAge - avgAge);
let maa = abs(maxAge - avgAge);
console.log(ma);
console.log(maa);

// Find the middle country(ies) in the countries array, Divide the countries array into
// two equal arrays if it is even. If countries array is not even ,one more country for 
// the first half.
if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    countries.push("korea");
    let b = countries.length / 2;
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}