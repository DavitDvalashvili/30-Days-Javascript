const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: ' ' },
{ product: 'avocado', price: 8 },
{ product: 'coffee', price: 10 },
{ product: 'tea', price: '' }
]

//Explain the difference between forEach, map, filter, and reduce.
// forEach: interate each element dont return 
// map: interate each element and return a modify array
// filter: interate each element and return a modify array only with elements that pass on the condition
// reduce: interate each element with an accumulate and return the previous return of the interaction


//Define a callback function before you use it in forEach, map, filter or reduce.

let show = (a) => console.log(typeof a == 'number')
let anArray = [1,2,3,4,5]
anArray.forEach(show)
anArray.map(show)
anArray.filter(show)
anArray.reduce(show)

//Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country))

//Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))

//Use forEach to console.log each number in the numbers array.
numbers.forEach(numbers => console.log(numbers))

//Use map to create a new array by changing each country to uppercase in the countries array
countries.map(country => country.toUpperCase())

//Use map to create an array of countries length from countries array.
countries.map(country => country.length)

//Use map to create a new array by changing each number to square in the numbers array
numbers.map(number => Math.pow(number,2))

//Use map to change to each name to uppercase in the names array
names.map(name => name.toUpperCase())

//Use map to map the products array to its corresponding prices.
products.map(product => product.price)

//Use filter to filter out countries containing land.
countries.filter(country => country.match(/land/gi))

//Use filter to filter out countries having six character.
countries.filter(country => country.length == 6)

//Use filter to filter out countries containing six letters and more in the country array.
countries.filter(country => country.length >= 6)

//Use filter to filter out country start with 'E';
countries.filter(country => country.startsWith('E'))

//Use filter to filter out only prices with values.
products.filter(product => typeof product.price == "number")

//Use filter to filter out only prices with values.
products.filter(product => typeof product.price == "number")

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let getStringLists = (arr) => {
   return arr.filter(elem => typeof elem == 'string');   
}
let a = [1, 2 , 'sdf', 'sdf', 234];
console.log(getStringLists(a));

//Use reduce to sum all the numbers in the numbers array.
numbers.reduce((sum,number) => sum + number)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
countries.reduce((frase,country) => {
  if(countries[countries.length - 1] == country){ 
    return `${frase} and ${country} are north European countries`
  }
	return `${frase}, ${country}`
})

//Explain the difference between some and every
/** Exercise 21
 * some - test if some elements is pass the condition
 * every - test all elements
 */

//Use some to check if some names' length greater than seven in names array
names.some(name => name.length > 7)

//Use every to check if all the countries contain the word land
countries.every(country => country.match(/land/gi))

//Explain the difference between find and findIndex.
/** Exercise 24
 * find - search by element and return the element
 * findIndex - search by element and return the index
 */

//Use find to find the first country containing only six letters in the countries array
countries.find(country => country.length == 6)

//Use findIndex to find the position of the first country containing only six letters in the countries array
countries.findIndex(country => country.length == 6)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
countries.findIndex(country => country == "Norway")

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
countries.findIndex(country => country == "Russia")

//Level 2

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products.filter(p => typeof p.price != 'string').reduce((acc, cur) => acc + cur.price, 0);

//Find the sum of price of products using only reduce reduce(callback))
let totalPrice2 = products.reduce((sum, obj) => { return typeof obj.price != 'string' ? sum += obj.price: sum;
}, 0);

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
let categorizeCountries = (arr) => {
  return arr.filter(c => c.endsWith('en'));
}

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
let frequentLetterList = Countries.map(c => c[0]).reduce((obj, cur) => {
  obj[cur] = (obj[cur] || 0) +1;
  return obj;
}, {})
console.log(frequentLetterList);
/**
function getObject(arr) {
  let object = {};
  for(const i of arr) {
     if(object.hasOwnProperty(i)) {
        object[i] += 1;
     } 
     else {
        object[i] = 1;
     }
  }
  return object;
}
console.log(getObject(frequentLetter));
**/

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
let getFirstTenCountries = arr => arr.filter(c => arr.indexOf(c)<10);

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
let getLastTenCountries = arr => arr.filter(c=> arr.indexOf(c) > arr.length-11);

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
let frequentFirstLetter = Object.entries(Countries.map(c => c[0]).reduce((acc,cur) => {
  acc[cur] = (acc[cur] || 0) +1;
  return acc;
}, {})).reduce((obj, cur) => {
  obj.max = (obj.max || cur[1]);
  obj.letter = (obj.letter || '');

  if (obj.max < cur[1]) {
     obj.max = cur[1];
     obj.letter = cur[0];
  }
  return obj;
}, {}).letter;

console.log(frequentFirstLetter);
// { [1, 2]: [2, 4 ]}

//Level 3

// LEVEL 3 Challenges| Functional Programming
// data
const countries2 = [
  {
     name: 'Afghanistan',
     capital: 'Kabul',
     languages: ['Pashto', 'Uzbek', 'Turkmen'],
     population: 27657145,
     flag: 'https://restcountries.eu/data/afg.svg',
     currency: 'Afghan afghani'
},
  {
     name: 'Åland Islands',
     capital: 'Mariehamn',
     languages: ['Swedish'],
     population: 28875,
     flag: 'https://restcountries.eu/data/ala.svg',
     currency: 'Euro'
},
  {
     name: 'Albania',
     capital: 'Tirana',
     languages: ['Albanian'],
     population: 2886026,
     flag: 'https://restcountries.eu/data/alb.svg',
     currency: 'Albanian lek'
},
  {
     name: 'Algeria',
     capital: 'Algiers',
     languages: ['Arabic'],
     population: 40400000,
     flag: 'https://restcountries.eu/data/dza.svg',
     currency: 'Algerian dinar'
},
  {
     name: 'American Samoa',
     capital: 'Pago Pago',
     languages: ['English', 'Samoan'],
     population: 57100,
     flag: 'https://restcountries.eu/data/asm.svg',
     currency: 'United State Dollar'
},
  {
     name: 'Andorra',
     capital: 'Andorra la Vella',
     languages: ['Catalan'],
     population: 78014,
     flag: 'https://restcountries.eu/data/and.svg',
     currency: 'Euro'
}]

//Use the countries information, in the data folder. Sort countries by name, by capital, by population

// 1: sort by name     
let sortedByName = countries2.map(o => o.name );  
sortedByName.forEach(x =>console.log(x));

// 2: sort by capital
let sortedByCapital = countries2.sort((a, b) => a.capital.localeCompare(b.capital));
sortedByCapital.forEach(o=>console.log(o));

// 3: sort by population 
let sortedByPopulation = countries2.sort((a, b) => b.population - a.population);
sortedByPopulation.forEach(x => console.log(x));

// Find the 10 most spoken languages:
let mostSpoken = Object.entries(countries2.reduce((langs, obj) => { obj.languages.forEach(x => langs.push(x));
  return langs;
}, []).reduce((dict, lang) => {
  dict[lang] = (dict[lang] || 0) +1;
  return dict;
}, {})).sort((a, b) => b[1]-a[1]);
mostSpoken.forEach(x => console.log(x));

// 
function sortByMostPopulated (countries) { 
 let mostPopulated = countries2.sort((a, b) => b.population - a.population);
 return mostPopulated;
}