//level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries

//Destructure the rectangle object by its properties or keys.
let [width, height, area, perimeter] = rectangle

//level2

//Iterate through the users array and get all the keys of the object using destructuring
users.map(({name,scores,skills,age}) => console.log(`${name},${scores},${skills},${age}`))

//Find the persons who have less than two skills
users.filter(({skills}) => skills.length <= 2)

//level 3

//Destructure the countries object print name, capital, population and languages of all countries
countries.map(({name,capital,languages,population}) => console.log(`NAME: ${name}\nCAPITAL: ${capital}\nLANGUAGES ${languages.join(", ")}\nPOPULATION: ${population}`))

//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

David (4) ["HTM", "CSS", "JS", "React"]

//Write a function called convertArrayToObject which can convert the array to a structure object.
//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
countries.map(({name,capital,languages,population}) => console.log(`NAME: ${name}\nCAPITAL: ${capital}\nLANGUAGES ${languages.join(", ")}\nPOPULATION: ${population}`))

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets

// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

function arrayToObject(arrayToConvert){
    return arrayToConvert.map(data => {
      let {0:name, 1:skills, 2:scores} = data
      return {name, skills, scores}
    })
}

const newstudent = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}
let newStudent = {...student}

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')