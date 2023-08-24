//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGenerator(){
    let ids = [], id = '', toupper = 0, letter = '', nIds = 0, lengthId = 0 
    nIds = parseInt(prompt("How many id(s) to generate ?"))
    lengthId = parseInt(prompt("What will be the length of the id(s) generates ?"))
    for(let i = 0; i < nIds; i++){
      id = ''
      while(id.length < lengthId){
        randChar = (Math.trunc(Math.random() * 32)) + 94
        letter = String.fromCharCode(randChar)
        toUpper = Math.trunc(Math.random() * 2)
        if(randChar >= 65 || randChar <= 90){
          if(!toUpper){
            letter = letter.toLowerCase()
          }
        }
        if(( (randChar >= 65) || (randChar <= 90) ) || ((randChar >= 48) || (randChar <= 57)) ){
          id += letter
        }
      }
      ids.push(id)
    }
    return ids
}

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    let red = Math.trunc(Math.random() * 255)
    let green = Math.trunc(Math.random() * 255)
    let blue = Math.trunc(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}


//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(){
    let red = Math.trunc(Math.random() * 255).toString(16)
    let green = Math.trunc(Math.random() * 255).toString(16)
    let blue = Math.trunc(Math.random() * 255).toString(16)
    return [red,green,blue]
}

//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    let red = Math.trunc(Math.random() * 255)
    let green = Math.trunc(Math.random() * 255)
    let blue = Math.trunc(Math.random() * 255)
    return [red,green,blue]
}

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(){
    let rgbColor = "#a3e12f"
    rgbColor = rgbColor.slice(1)
    let red = rgbColor.slice(0,2)
    let green = rgbColor.slice(2,4)
    let blue = rgbColor.slice(-2)
    return [red,green,blue]
}

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(){
    let rgbColor = "rgb(5, 55, 175)".replace('rgb', '').replace(/[\(\)]/g,'')
    rgbColor = rgbColor.slice(1)
    let red = rgbColor.slice(0,2)
    let green = rgbColor.slice(2,4)
    let blue = rgbColor.slice(-2)
    return [red,green,blue]
}

//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(color, number){
    let hexa = () => `#${arrayOfHexaColors().join('')}`
    let rgb = () => rgbColorGenerator()
    let colors = []
    for(let i = 0; i < number; i++){
      colors.push(eval(`${colors}()`))
    }
    
    return colors
}

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(numbers){
    let length = numbers.length 
    for(let i = 0; i < length; i++){
      let index = Math.trunc(Math.random()*(length-1))
      let aux = numbers[i]
      numbers[i] = numbers[index]
      numbers[index] = aux
    }
    return numbers
}

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number = 1){
    if([0,1].includes(number)){
      return 1
    }
    let sum = number * factorial(number-1)
    return sum
}

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param){
    return [undefined, null].indexOf(param) != -1
}

//Call your function sum, it takes any number of arguments and it returns the sum.
function sum(number){
    return number + number
}

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback
function sumOfArrayItems(numbers){
    let arrayOfNonNumbers = numbers.filter(number => typeof(number) != "number")
    if(arrayOfNonNumbers.length > 0){
      return "Not all elements were numbers"
    }
  
    return eval(numbers.join("+"))
}

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function avg(numbers){
    let arrayOfNonNumbers = numbers.filter(number => typeof(number) != "number")
    if(arrayOfNonNumbers.length > 0){
      return "Not all elements were numbers"
    }
    return eval(numbers.join("+"))/numbers.length
}

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(elements){
    if(elements[4] != undefined){
      elements[4] = elements[4].toUpperCase()
    }
    return elements
} 

//Write a function called isPrime, which checks if a number is prime number.
function isPrime(number){
    for(let n = 2; n < number; n++){
      if(number%n == 0){
        return false
      }
    }
    return true
}

//Write a functions which checks if all items are unique in the array.
function hasUniqueItems(items){
    for(let i = 0; i < items.length; i++){
      if(items.filter(n => n === items[i]).length > 1){
        return false
      }
    }
    return true
}

//Write a function which checks if all the items of the array are the same data type.
function hasSameType(items){
    items = items.map(i => typeof(i))
    for(let i = 0; i < items.length; i++){
      if(items.filter(n => n != items[i]).length > 1){
        return false
      }
    }
    return true
}

//JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(varName){
    return varName.match(/[^A-Za-z$_]/) == null
}

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
function sevenRandomNumbers(){
    var randNumbers = [], i = 0
    while(randNumbers.length <= 7){
      i = Math.trunc(Math.random() * 100)
      if(randNumbers.indexOf(i) == -1){
        randNumbers.push(i)
      }
    }
    return randNumbers
}

//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries){
    var copy = countries
    return countries.reverse()
}



  



