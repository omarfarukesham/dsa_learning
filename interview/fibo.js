function fibonacciFun(n){
    const fibo = [0, 1]
    for(let i = 2; i <= n; i++ ){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo[n]; 
}

console.log(fibonacciFun(12))