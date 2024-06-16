
function getPrimeNumber(n){
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is prime number`
}

const getResult = getPrimeNumber(13)
console.log(getResult)

