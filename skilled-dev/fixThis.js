class User {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    printSeatNumber() {
      console.log('The seats have not been set');
    }
  }
  
  class Meeting {
    constructor(users) {
        console.log(users)
      const presenter = users[0];
      this.getPresenterName = presenter.getName.bind(presenter);
      this.setUserSeats(users);
    }
    setUserSeats(users) {
      for (let i = 0; i < users.length; i++) {
        users[i].printSeatNumber = () => {
          console.log(i);
        }
      }
    }
  }
  
  const users = [new User('Jeni'), new User('Dan'), new User('Carol')];
  const meeting = new Meeting(users);
  
  // Broken results
  console.log(meeting.getPresenterName()); // undefined (expected ‘Jeni’)
//   users[0].printSeatNumber(); // 3 (expected 0)
//   users[1].printSeatNumber(); // 3 (expected 1)
//   users[2].printSeatNumber(); // 3 (expected 2)


// example of var and let

// for(var i = 0; i < 5; i++){
//    setTimeout(()=>  console.log(i), 500)
// }
// for(let i = 0; i < 5; i++){
//    setTimeout(()=>  console.log(i), 500)
// }



// const StudentInfo = {
//     name: 'Isham',
//     age: 8,
//     school: {
//         name: 'SCD',
//         level: 3,
//         schoolInf(){
//             console.log(`His school name is ${this.name} and he is the level ${this.level}
//                 s student`)
//         }
//     },
//     admission(){
//         console.log(`Mr. ${this.name} is going to addmit this year when he will be the ${this.age}`)
//     }

// }


// StudentInfo.school.schoolInf()
// StudentInfo.admission()


// const buttons = [];
// for (var i = 0; i < 5; i++) {
//   const button = document.createElement('button');
//   button.innerText = `Button ${i + 1}`;
//   button.onclick = function() {
//     console.log(`You clicked button ${i + 1}`);
//   };
//   buttons.push(button);
//   document.body.appendChild(button);
// }
// console.log(buttons)


// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
  
//   const person = new Person('John', 'Doe');
//   const getName = person.getFullName.bind(person);
//   console.log(getName()); 
  

  function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const multipliers = [];
  for (var i = 1; i <= 3; i++) {
    multipliers.push(createMultiplier(i));
  }
  
//   console.log(multipliersExpected 10, but may return unexpected results
  console.log(multipliers ); //ed 20
  console.log(multipliers ); // Expec```
  
  