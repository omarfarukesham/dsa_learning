//anagram 

function areAnagram(word1, word2){
    const normalized = (word) => word.toLowerCase().replace(/[^\w]/g, "")

    const sortedWord1 = normalized(word1).split("").sort().join()
    const sortedWord2 = normalized(word2).split("").sort().join()

    return sortedWord1 === sortedWord2
}

console.log(areAnagram('listen', 'SILENT'))

function isPlaindrome(sentense){
    const sentenseClean = sentense.toLowerCase().replace(/[^\w]/g, "")

    for(let i = 0; i < sentenseClean.length/2; i++){
        if(sentenseClean[i] !== sentenseClean[sentenseClean.length - i -1]){
            return false;
        }
    }
    return true;

}

console.log(isPlaindrome('Level'))

function stringReverse(word){

    let reverse = ''
    for(let i = word.length -1; i >= 0; i--){
        reverse += word[i]
    }

    return reverse;
}

console.log(stringReverse('patato'))

function triangleShape(n){
    for(let i = 1; i <= n ; i++){
        console.log("*".repeat(n))
    }
}
triangleShape(5)

function pyramidShape(rows){
    for(let i = 1; i <= rows; i++){
        const spaces = " ".repeat(rows-i);
        const star = "*".repeat(2*i -1)
        console.log(spaces + star)
    }

    for(let i = rows-1; i >= 1; i--){
        const spaces = " ".repeat(rows-i);
        const star = "*".repeat(2*i -1)
        console.log(spaces + star)
    }
}
pyramidShape(5)


//fibo 

function fiboFun(n){
    if(n <= 0) return []
    if(n === 1) return [0]

    fibo= [0,1]
    for(let i = 2; i <= n; i++){
        fibo.push(fibo[i-1] + fibo[i-2])
    }
    return fibo;
}

console.log(fiboFun(12))

function fiboRecurssive(n){
    if(n <= 1) return n;

    return fiboRecurssive(n-1) + fiboRecurssive(n-2)
}
console.log(fiboRecurssive(12))

const arr = [12,33,44,5,66]

let maxValue = -Infinity;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxValue){
        maxValue =  arr[i]
    }
}
console.log(maxValue)

let minValue = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < maxValue){
        maxValue =  arr[i]
    }
}
console.log(minValue)