//level 3
//Copy countries array(Avoid mutation)
let countriesCopy = [];
for (const country of countries) {
    countriesCopy.push(country);
}

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

//Sort the webTechs array and mernStack array
let sortedWebTechs = webTechs.sort();
let mernStack = ['MangoDB', 'Express', 'Redux', 'NodeJS'];
let sortedMernStack = mernStack.sort();

//Extract all the countries contain the word 'land' from the countries array and print it as array
let landCountries = [];
for (const country of countries) {
    if (country.includes('land')) {
        landCountries.push(country);
    }
}
console.log(landCountries);


//Find the country containing the hightest number of characters in the countries array
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
    if (country.length > maxLength) {
        maxLength = country.length;
        maxLenCountry = country;
    }
}
console.log(maxLenCountry);

//Extract all the countries contain the word 'land' from the countries array and print it as array
let lenFourCountries = [];
for (const country of countries) {
    if (country.length === 4)
        lenFourCountries.push(country);
}
console.log(lenFourCountries);

//Extract all the countries containing only four characters from the countries array and print it as array
let twoWordCountries = [];
for (const country of countries) {
    if (country.split(' ').length > 1)
        twoWordCountries.push(country);
}
console.log(twoWordCountries);

//Reverse the countries array and capitalize each country and stored it as an array
let reversedCountries = countries.reverse();
let capReverseCountries = [];

for (const country of reversedCountries) {
    capReverseCountries.push(country.toUpperCase());
}
console.log(capReverseCountries);
