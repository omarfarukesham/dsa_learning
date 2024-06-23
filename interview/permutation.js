function permutationFun(numbers){
    let newNumber = 1;
    for(let i = 1; i <= numbers; i++){
        newNumber = newNumber*i
    }

    return newNumber;
}


const getResultOfPermutation = permutationFun(6)
console.log(getResultOfPermutation)