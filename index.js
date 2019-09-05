//function within object

const animal = {
  name: 'Pompom',
  age: 2,
  breed: 'Persian long hair',

  //function declaration

  walk: function() {
    console.log(`${animal.name} is walking`) //Pompom is walking

},
//arrow function
  run: speed => {
    console.log(`${animal.name} sedang berlari${speed} m/h!`) //Pompom sedang berlari 30m/h
  }
}
animal.walk()
animal.run(30)

//Object Access

//Square brackets

const user = {}
//set 
user['walk fast'] = true
//get
console.log(user['walk fast']) //true

//delete
delete user['walk fast']

// ----------------------//

const mine = {
  name: 'Ridho',
  age: 25
}
const key = prompt("what do u want to know about the user?", "name")

console.log(mine[key]); //Ridho

//
new Date() //show current date

getFullYear() //find full year
getMonth() //find current month
getDate() //find current date