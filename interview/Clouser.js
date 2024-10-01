function counterFun(){
    let count = 0

    return function(){
        count++
        console.log(`counter no ${count}`)
    }
}


 const counter1 = counterFun() 
 counter1() //result1 
 counter1() //result1 
 counter1() //result1 

 console.log('----------------------------------------- ')

 const counter2 = counterFun()
 counter2()
 counter2()



  