//Level 1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//Declare an empty array;
let Array = [];

//Declare an array with more than 5 number of elements
let evenNumbers = [2, 4, 6, 8, 10, 12, 14];

//Find the length of your array
console.log(evenNumbers.length)

//Get the first item, the middle item and the last item of the array
let firstItem = console.log(evenNumbers[0]);
let middleItem = console.log(food[3]);
let lastItem = console.log(evenNumbers[evenNumbers.length - 1]);

//Declare an array called mixedDataTypes, put different data types in the array 
//and find the length of the array. The array size should be greater than 5
let mixedDataType = ["Davit", 27, true, null, {
    favoriteFood: ["js", "puyhon", "html", "css"]
}, null]

//Declare an array variable name itCompanies and assign initial values Facebook, 
//Google, Microsoft, Apple, IBM, Oracle and Amazon
let techCompanies = ["google", "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];

//Print the array using console.log()
console.log(techCompanies);

//Print the number of companies in the array
console.log(techCompanies.length)

//Print the first company, middle and last company
console.log(techCompanies[0])
console.log(techCompanies[techCompanies.length-1])
console.log(techCompanies[0])
console.log(techCompanies[4])

//Print out each company
for(let i=0; i<techCompanies.length; i++) {
    console.log(techCompanies[i])
}

//Change each company name to uppercase one by one and print them out
for(let i=0; i<techCompanies.length; i++) {
    console.log(techCompanies[i].toLocaleUpperCase)
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle 
//and Amazon are big IT companies.
let sentence = techCompanies.slice(0, -1).join(', ') + ' and ' + techCompanies.slice(-1) + ' are big IT companies.';
console.log(sentence);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return 
//a company is not found
let searchTechComp = prompt("enter company to search");
if (techCompanies.includes(searchTechComp)) {
    console.log(searchTechComp)
} else {
    console.log("company not found")
}

//Filter out companies which have more than one 'o' without the filter method
let oo = []
for (let i = 0; i < techCompanies.length; i++) {
    oo.push(techCompanies[i].includes("oo"));
}

//Sort the array using sort() method
techCompanies.sort();

//Slice out the first 3 companies from the array
techCompanies.reverse();

//Slice out the last 3 companies from the array
techCompanies.slice(techCompanies.length - 1, 3)

//Slice out the middle IT company or companies from the array
techCompanies.slice(Math.floor(techCompanies.length / 2), 1);
console.log(middleElements);

//Remove the first IT company from the array
techCompanies.shift()
let middleIndex = Math.floor(techCompanies.length / 2);
let numElementsToRemove = techCompanies.length % 2 === 0 ? 2 : 1;
let removedCompanies = techCompanies.splice(middleIndex, numElementsToRemove);

//Remove the last IT company from the array
techCompanies.pop()

//Remove all IT companies
techCompanies.slice(techCompanies.length);