//filters practise

// const arr = [4, 5,6,7,8,9]

// const getFilterArray = arr.filter(ar => ar % 2 === 0)
// console.log(getFilterArray)


// const getReduceArrResult = arr.reduce((acc, x)=> acc + x, 0)

// console.log(getReduceArrResult)

//forEach method
//  var sum = 0
// arr.forEach(x => sum += x)
// console.log('forEach ........ ', sum)

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2;
// }
// const newArr  = array.map(ar => ar * 2)

// console.log(newArr); // [2, 4, 6, 8, 10];

// const newFilterArr = array.filter(arr => arr % 2 === 0)
// console.log(newFilterArr)

//  const newEvenArr = []
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         newEvenArr.push(array[i])
//     }
// }
// console.log(newEvenArr)

// const array = ['Jeni', 'Bob', 'Carol'];

// const isFriend1 = (friends, name) => {
//   for (let i = 0; i < friends.length; i++) {
//     const friend = friends[i];
//     if (friend === name) {
//       return true;
//     }
//   }
//   return false;
// }


// const findResult =  array.find(x => x === 'Carol')

// console.log(findResult)


// const isFriend = (friends, name) => friends.includes(name)
// console.log(isFriend(array, 'Bob')); // true


//find the friend if user provide the id no 
const array = [
    { id: 1, name: 'Jeni' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carol' },
  ];


  const findFriend = (friends, id)=>{
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === id) {
          return friend;
        }
      }
  }

  console.log(findFriend(array, 2).name)

  //2nd option by using array methods

  const getFriend = (friends, id)=> friends.find((friend)=> friend.id === id)

  console.log(getFriend(array, 1).name)