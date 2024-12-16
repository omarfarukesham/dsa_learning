// #print triangle 

function printTriangle1(n){
    for(let i = 1; i <= n; i++){
        console.log("*".repeat(i))
    }
}

printTriangle1(5)
console.log('............................................')
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(n)); // Repeat `i` stars for each row
    }
}

printTriangle(5);


//print pyramid
function printPyramid(rows){
    for(let i = 1; i <= rows; i++ ){
        const spaces = " ".repeat(rows - i);
        const stars = "*".repeat(2*i -1)

        console.log(spaces + stars)

    }
}

printPyramid(5)

//fibonacci algorithm

function fibonacciGenerator(n){
    if(n <= 0) return []
    if(n === 1) return [0]
    if(n === "") return 'string not allowed'

    let fib = [0, 1]

    for(let i = 2;  i < n; i++){
        fib.push(fib[i-1] + fib[i-2])
    }

    return fib
}

console.log(fibonacciGenerator(10))