//filters practise

const arr = [4, 5,6,7,8,9]

const getFilterArray = arr.filter(ar => ar % 2 === 0)
console.log(getFilterArray)


const getReduceArrResult = arr.reduce((acc, x)=> acc + x, 0)

console.log(getReduceArrResult)