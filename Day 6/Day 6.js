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
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Iterate 10 to 0 using for loop, do the same using while and do while loop
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
do {
    i++;
    console.log(i)
} while (i < 10)

//Iterate 0 to n using for loop
let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//Write a loop that makes the following pattern using console.log():
let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

//Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

//Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumEvenOdd = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenOdd[0] += i;
    } else if (i % 2 > 0) {
        sumEvenOdd[1] += i;
    }
}
console.log(sumEvenOdd)

//Develop a small script which generate array of 5 random numbers
let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)

//Develop a small script which generate a six characters random id:
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)

//level2
//Develop a small script which generate any number of characters random id:
let chars2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars2.length);
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars2.length);
    randChars += chars2[random];
}
console.log(randChars);

//Using the above countries array, create the following new array.
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3), countries[i].length])
}
console.log(newCountries)

//Use the countries array to create the following array of arrays:+
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
//n above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countWithoutLand = []
let countWithLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i])
    }
}

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countWithIa = []
let countWithoutIa = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        countWithIa.push(countries[i]);
    } else {
        countWithoutIa.push(countries[i])
    }
}
console.log(`countries with "ia" ${countWithIa}`);
console.log(`countries without "ia" ${countWithoutIa}`)

//Using the above countries array, find the country containing the biggest number of characters.
let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);

let highest;
highest = Math.max.apply(null, countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNum)]);

//Using the above countries array, find the country containing only 5 characters.
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars)

//Find the longest word in the webTechs array
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max.apply(null, webTechsLength);
console.log(highestChar)
console.log(webTechs[webTechsLength.indexOf(highestChar)]);

//Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 0);
}
console.log(mern)

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i])
}
for (let tech of techs) {
    console.log(tech);
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
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
for(const country of countries) {
   if(country.includes('land')) {
      landCountries.push(country);
   }
} 
console.log(landCountries);


//Find the country containing the hightest number of characters in the countries array
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} 
console.log(maxLenCountry);

//Extract all the countries contain the word 'land' from the countries array and print it as array
let lenFourCountries = [];
for (const country of countries) {
   if(country.length === 4) 
      lenFourCountries.push(country);
} 
console.log(lenFourCountries);

//Extract all the countries containing only four characters from the countries array and print it as array
let twoWordCountries = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      twoWordCountries.push(country);
} 
console.log(twoWordCountries);

//Reverse the countries array and capitalize each country and stored it as an array
let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
} 
console.log(capReverseCountries);
