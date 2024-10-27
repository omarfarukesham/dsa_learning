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
console.log(getUser.printSeatNo())

const StudentInfo = {
    name: 'Isham',
    age: 8,
    school: {
        name: 'SCD',
        level: 3,
        schoolInf(){
            console.log(`His school name is ${this.name} and he is the level ${this.level}
                s student`)
        }
    },
    admission(){
        console.log(`Mr. ${this.name} is going to addmit this year when he will be the ${this.age}`)
    }

}


StudentInfo.school.schoolInf()
StudentInfo.admission()