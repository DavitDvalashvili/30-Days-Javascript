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