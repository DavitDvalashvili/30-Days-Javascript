//Create an empty object called dog
const dog = {};

//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog['name'] = 'Rey';
dog['age']  = 5;
dog['legs'] = 4;
dog['color']= 'black';
dog['bark'] = () => 'Woof Woof';

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

//Set new properties the dog object: breed, getDogInfo
dog['breed'] = 'Georgian shepherd';
dog['getDogInfo'] = () => {
   console.log(dog.name);
   console.log(dog.age);
   console.log(dog.breed);
}
dog.getDogInfo();

//level 2
//Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let max = 0;
let skilledPerson;

for(const user of Object.keys(users)) {
   if(users[user].skills.length > max) {
      max = users[user].skills.length;
      skilledPerson = Object.assign({}, users[user]);
   }
}
console.log(skilledPerson.email, max);

//Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let points50UpUsers = 0;

for(const user of Object.keys(users)) {
   if(users[user].isLoggedIn) 
      loggedInUsers++;
    
   if(users[user].points >= 50) 
      points50UpUsers++;
}
console.log(loggedInUsers, points50UpUsers);

//Find people who are MERN stack developer from the users object
let findMernStackDevs = () => {
    let mern = ['MangoDB', 'Express', 'React', 'Node'];
    let count = 0;
    let mernStackDevs = [];
    
    for(const dev of Object.values(users)) {
       for(const skill of dev['skills']) {
          if (mern.indexOf(skill) != -1) 
             count++;
       }
       if(count == 4) 
          mernStackDevs.push(dev);
    }
    return mernStackDevs;
 }
 
 findMernStackDevs().forEach((el) => {
    console.log(el); 
 })

//Set your name in the users object without modifying the original users object
const usersCopy = Object.assign({}, users);
usersCopy['Davit'] = {};

//Get all keys or properties of users object
const keys = Object.keys(users);

//Get all the values of users object
const values = Object.values(users);

//Use the countries object to print a country name, capital, populations and languages
const country = countries[Object.keys(countries)[0]];
   
   console.log("Name: ", country.name)
   console.log("Capital: ", country.capital)
   console.log("Population: ", country.population);
   console.log("Languages: ", country.languages);

//level 3

//Create an object literal called personAccount. It has firstName, lastName, incomes, 
//expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'John',
    lastName: 'Nash',
    balance: 0,
    
    incomes: {
       courses: 2000,
       salary: 2300,
       tutoring: 1800
    },
    expenses: {
       rent: 1200,
       bill: 400,
       saloon: 150
    },
    
    // methods down below    
    totalIncome: function(){
       let total = 0;
       for(const each of Object.keys(personAccount.incomes))
          total += personAccount.incomes[each];
       return total;
    },
    
    totalExpense: function() {
       let total = 0;
       for(const each of Object.values(personAccount.expenses)) {
          total += each;
       }   
       return total;
    },
    
    
    // account balance     
    accountBalance : function() { 
       return this.balance; 
    },
    
    accountInfo : function() {
       console.log("Name: ", this.firstName + ' ' + this.lastName);
       console.log("Account Balance: ", this.balance);
    },
    
    addIncome : function(type, amount) {
       this.incomes[type] = amount;
    },
    
    addExpense : function(type, amount) {
       this.expenses[type] = amount;
    }
 }
 
 
 console.log(personAccount.totalIncome());
 console.log(personAccount.totalExpense());
 personAccount.accountInfo();
 personAccount.addIncome('art', 200);
 personAccount.addExpense('pen', 330);
 personAccount.accountInfo();

//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
let signUP = (name, mail, pswd) => {
    // check if user exists    
    for(const usr of users)
       if(usr.mail == mail)
          return 'User Exists!';
          
    // generate ID first      
    let alps = '123456abhsgesvj2672sa';
    let rand = [];
    
    for(const chr of '______') {
       let random = parseInt(Math.random()*alps.length);
       rand.push(alps[random]);
    }
    let id = rand.join('');
    
    // create the date   
    const d = new Date();
    
    let mins = d.getMinutes();
    mins < 10 ? '0' + mins.toString() : mins;
    let hrs = d.getHours();
    hrs < 10 ? '0' + hrs.toString() : hrs;
    
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
   
    let DATE = `${year}/${month+1}/${date}  ${hrs>12? (hrs-12).toString() + ':' + mins.toString() + ' PM': hrs.toString()+':' + mins.toString() + ' AM'}`;
      
    // add to the object of users     
    let userData = {
          _id: id,
          username: name,
          email: mail,
          password: pswd,
          createdAt: DATE,
          isLoggedIn: false
       };
    users.push(userData);
 }
 signUP('alecy', 'aex@alex.com', 'pstg34');
 
 users.forEach((x) => console.log(x));
 // ii: SignIN 
 let signIN = (mail, pswd) => {
    for(const user of users) {
       if(user.email == mail && user.password == pswd) {
          user.isLoggedIn = true;
          return 'You have been signed in!!';
       }  
    }
    return 'Incorrect Email or password';
 }
 console.log(signIN('alex@alex.com', '123123'))

 const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

let averageRating = (productID) => {
    let total = 0;
    let pdt;
    
    for(const prod of products) {
       if(prod._id == productID)
          pdt = prod;
    } 
    
    for(const usr of pdt.ratings) {
         total += usr.rate;
    }
    return total/pdt.ratings.length; 
 }
 console.log(averageRating('eedfcf'));

 let likeProduct = (userId, productNo) => {
    let pdt = products[productNo-1];
    let index = pdt.likes.indexOf(userId);
   
    if(index == -1) {
       pdt.likes.push(userId);
    }  
    else {
       pdt.likes.splice(index, 1);   
    }
 }
 
 likeProduct('venom23', 1);