function recurssiveFib(n){
    if(n <= 1){
        return n
    }

    return recurssiveFib(n-1) + recurssiveFib(n-2)
}

console.log(recurssiveFib(10))