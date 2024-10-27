class User{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name;
    }

    printSeatNo(){
        console.log('The seats have not been set');
    }
}

class Meeting{

}


const getUser = new User('omar')
console.log(typeof getUser)

console.log(getUser.getName())
console.log(getUser.getName())
console.log(getUser.getName())