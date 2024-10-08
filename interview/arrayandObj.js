const person = {
    name: 'omar',
    age: 38,
    city: 'Dhaka'
}

// console.log(person.name)

// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

Object.values(person).forEach(value => {
    console.log(value);
  });