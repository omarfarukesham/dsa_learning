// var  x;
// console.log(x)
// x = 5
// console.log(x)

// hoistedFun()

//  const helloHoited = function hoistedFun(){
//     console.log('Hello hoisted')
// }


function countCoffeeRegistration(counterName){
    let count = 0;
    return function(){
            count++
            console.log(`${counterName} Coffe served no ${count}`)
        }
    
}

const counter1 = countCoffeeRegistration('counter1')
counter1()
counter1()
counter1()
counter1()

console.log('.............................')

const counter2 = countCoffeeRegistration('coutner2')
counter2()
counter2()
counter2()