//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c){
    var x, y
    x = -(c/a)
    y = -((a*x + c)/b)
    return [x,y]
}

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c){
    var x1, x2
    x1 = (-b + Math.sqrt( pow(b,2) - 4 * a * c ))/ 2 * a
    x2 = (-b - Math.sqrt( pow(b,2) - 4 * a * c ))/ 2 * a
    return [x1,x2]
}

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(values){
    console.log(values)
}

//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(...values){
    return values.reverse()
}

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array){
    var i = 0, lastIndex = array.length - 1, newArray = []
    for(i = lastIndex; i >= 0; i--){
      newArray.push(array[i])
    }
    return newArray
}

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array){
    return array.map(value => value.toUpperCase())
}

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(a){
    return [a]
}

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(i){
    var anArray = ['a','b','c','d','e','f']
    return [...anArray.slice(0,i), ...anArray.slice(i+1)]
}

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(range){
    var a = 0
    for(let i = 0; i < range; i++){
      a += i 
    }
    return a 
}

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(range){
    var a = 0
    for(let i = 0; i < range; i++){
      a += (i%2 != 0) ? i : 0
    }
    return a 
}

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEvens(range){
    var a = 0
    for(let i = 0; i < range; i++){
      a += (i%2 == 0) ? i : 0
    }
    return a 
}

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(range){
    var evens = 0, odds = 0
    for(let i = 0; i < range; i++){
      if((i%2) == 0){
        evens++
      }else{
        odds++
      }
    }
    return `The number of odds are ${odds}.\nThe number of evens are ${evens}.`
}

//Write a function which takes any number of arguments and return the sum of the arguments
function sum(...numbers){
    var sum = 0
    for(let number of numbers){
      sum += number
    }
    return sum
}

//Write a function which generates a randomUserIp.
function randomIp(){
    let re = RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')
    let generateIp = () => {
      let ip = []
      for(let a = 0; a < 3; a++){
        ip.push(`${Math.trunc(Math.random()*255)}`)
      }
      return ip.join(".")
    }
    let ip = generateIp()
    while(!ip.match(re)){
      ip = generateIp()
    }
  
    return ip
}

//Write a function which generates a randomMacAddress
function randomMac(){
    let re = RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')
    let generateMac = () => {
      let mac = []
      for(let i = 0; i < 6; i++){
        let bits = `${Math.trunc(Math.random()*16).toString(16)}${Math.trunc(Math.random()*16).toString(16)}`
        mac.push(`${bits.toUpperCase()}`)
      }
      return mac.join(":")
    }
    let mac = generateMac()
    while(!mac.match(re)){
      mac = generateMac()
    }
    
    return mac
}

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
    return `${Math.trunc(Math.random()*Math.pow(10,10)).toString(16)}`
}

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    let id = '', toUpper = 0, letter = ''
    while(id.length < 7){
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
    return id
}




  



  