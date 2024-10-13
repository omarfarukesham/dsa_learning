function coffeRegister(){
    let count = 0

    return function(){
        count++
        console.log(`counter no ${count}`)
    }
}


 const counter1 = coffeRegister() 
 counter1() // --------1
 counter1() // --------2


 console.log('----------------------------------------- ')

 const counter2 = coffeRegister()
 counter2() // --------1
 counter2() // --------2
 counter2() // ------- 3
 counter2() // ------- 4



 console.log('----------------------------------------- ')

 const counter3 = coffeRegister()
 counter3() // --------1
 counter3() // --------2
 counter3() // ------- 3
