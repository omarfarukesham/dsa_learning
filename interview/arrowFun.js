const person = {
    name: "omar faruk",
    greetRegularFun: function(){
            console.log(`hi My name is ${this.name}`)
    },
    greetArrow:()=>{
            console.log(`Hi this is from array function, ${this.name}`)
    }
}

person.greetArrow()
person.greetRegularFun()