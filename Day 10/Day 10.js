//level 1

//create an empty set
let empty = new Set();

//Create a set containing 0 to 10 using loop
let arr = [0,1,2,3,4,5,6,7,8,9,10];
let anotherSet = new Set();
for(const n of arr) {
   anotherSet.add(n);
}

//Remove an element from a set
listOfNumbers.delete(2)

//Clear a set


//Create a set of 5 string elements from array
anotherSet.clear();

//Create a set of 5 string elements from array
let setOfCountries = new Set(countries);
setOfCountries.forEach(o => console.log(o))

//Create a map of countries and number of characters of a country
let mapOfCountries = new Map();
for(const country of countries) {
   mapOfCountries.set(country, country.length);
}

//level 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//Find a union b
const c = [...a, ...b];
let aUnionB = new Set(c);

//Find a intersection b
let A = new Set(a);
let B = new Set(b);

//level 3
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{English:91},
{French:45},
{Arabic:25}
]
//How many languages are there in the countries object file.
let count = (new Set(countries.reduce((arr, cur) => {
    arr = arr.concat(cur.languages);
    return arr;
 }, []))).size;
 console.log(count);

//*** Use the countries data to find the 10 most spoken languages:
let mostSpoken = new Set(Object.entries(countries.reduce((arr, obj) => (arr = arr.concat(obj.languages)), []).reduce((obj, name) => {
    obj[name] = (obj[name] || 0) +1;
    return obj;
 }, {}))); 

