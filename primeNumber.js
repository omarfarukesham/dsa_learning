function findPrimeNum(n){
    if(n <= 1) return false;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }

    return true

}

const getPrimeNumberResult =  findPrimeNum(6)

console.log(getPrimeNumberResult)

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
  }
  
  function isPrime(num) {
    // Handle invalid or non-positive input
    if (num <= 1) return false;
  
    // Check divisibility from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // If no divisors found, it's prime
    return true;
  }
  
  // Example usage
  const numbers = [2, 4, 5, 7, 8, 11, 13];
  const primeNumbers = filterPrimes(numbers);
  console.log("Original array:", numbers);
  console.log("Prime numbers:", primeNumbers);
  