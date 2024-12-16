function recurssiveFibo(n){
    if(n <= 1) return n
    return recurssiveFibo(n-1) + recurssiveFibo(n-2)
}

console.log(recurssiveFibo(12))

function coffeeRegister(){
        let count  = 0;

        return function(){
            count++
            console.log(`Coffee served no ${count}`)
        }
}


const counter1 = coffeeRegister()
counter1()
counter1()
counter1()

console.log('2nd coffee counter ....................')
const counter2 = coffeeRegister()
counter2()
counter2()
counter2()
counter2()
