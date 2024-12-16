//anagram problem
    function areAnagram(word1, word2){
        const normalized = (word)=> word.toLowerCase().replace(/[^\w]/g, "")

        const sortedWord1 = normalized(word1).split("").sort().join("")
        const sortedWord2 = normalized(word2).split("").sort().join("")

        return sortedWord1 === sortedWord2;
    }
// console.log(areAnagram("hello", "Silent"))


//plaindrome problem
function isPalindrom(sentense){
    const sentenseClean = sentense.toLowerCase().replace(/[^\w]/g, "")

    for(let i = 0; i <= sentenseClean.length/2; i++){
        if(sentenseClean[i] !== sentenseClean[sentenseClean.length -i -1]){
            return false
        }
    }
    return true;
}

// console.log(isPalindrom('A man, a plan, a canal, Panama.'))

//string reverse problem
 function reverseString(word){
    let sentenseCleaned = word.toLowerCase().replace(/[^\w]/g, "")
    console.log(sentenseCleaned)
    let reverse = ""
    for(let i = sentenseCleaned.length -1; i >=0; i--){
        reverse += sentenseCleaned[i]
    }
    return reverse;
 }

//  console.log(reverseString('A man, a plan, a canal, Panama.'))
//  console.log(reverseString( 'Panama.'))



//print shape triangle, square, dimond, pyramid

//triangle
function triangleShape(n){
    for(let i = 0; i <= n; i++){
        console.log("*".repeat(n))
    }
}

// triangleShape(4)

//pyramid shape

function pyramidShape(n){
    for(let i = 1; i <= n; i++){
        const spaces = " ".repeat(n-i)
        const star = "*".repeat(2*i - 1)

      console.log(spaces + star)
    }
}

// console.log(pyramidShape(6))

function printPyramid(rows) {
    // Upper part of the diamond
    for (let i = 1; i <= rows; i++) {
        const spaces = " ".repeat(rows - i); // Spaces to center the stars
        const stars = "*".repeat(2 * i - 1); // Stars in the current row
        console.log(spaces + stars);
    }

 
}

// Call the function
// printPyramid(5);


//print Dimond

function printDimondShape(rows){
    for(let i = 1; i <= rows; i++){
        const voidSpace = " ".repeat(rows - i)
        const starIcon = "#".repeat(2*i -1)
        console.log(voidSpace + starIcon)
    }

    //
    for(let i = rows - 1; i >= 1; i--){
        const voidSpace = " ".repeat(rows - i)
        const starIcon = "#".repeat(2*i -1)
        console.log(voidSpace + starIcon)
    }
}

// printDimondShape(6)


//fibonacci serize
function fiboFunction(n){
   if(n <= 0) return []
   if(n === 1) return [0]
   let fibo = [0,1]

   for(let i = 2; i <= n; i++){
    fibo.push(fibo[i -1] + fibo[i - 2])
   }
   return fibo
}

// console.log(fiboFunction(12))



//recurssive fibo and sum
function fiboRecurssive(n){
    if(n <= 1) return n
    return fiboRecurssive(n-1) + fiboRecurssive(n-2)
}

// console.log(fiboRecurssive(12))
//clourse example code 
function coffeRegister(){
    let count = 0; 
    return function(){
        count++
        console.log(count)
    }
}

const counter1 = coffeRegister()
// console.log('1st Counter ................... ')
// counter1()
// counter1()
// counter1()
// console.log('2nd Counter .................... ')
// const counter2 = coffeRegister()
// counter2()
// counter2()
// counter2()
// counter2()
// counter2()
// console.log('3rd Counter .............')
// const counter3 = coffeRegister()
// counter3()
// counter3()
// counter3()
// counter3()S
// counter3()

//curring example function
function curriedCreateBurger(ban){
    return function(cheese){
        return function(patty){
            return function(veg){
                return `This is ${ban} and ${cheese} and ${patty} and ${veg} burger`
            }
        }
    }
}

// console.log(curriedCreateBurger('sesame')('beef')('cheddar')('lettuce and tomato'));
//Fetch API
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error =>{
//         console.error(error)
//     })

//object of js and methods, operations


//array of js and methods operations
 const arr = [2,4,5,6,7,100,8,9,11]
 console.log('pop', arr.push(500))
 console.log(arr)

 //max value finding 

 const getMaxValue =  arr.reduce((max, num)=> num > max ? num : max, -Infinity)
 console.log(getMaxValue)

 let maxValue = -Infinity;
 for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxValue){
        maxValue = arr[i]
    }
 }
 console.log("vanila loop .....",maxValue)

 //filter

 const getFilter = arr.filter((el) => el > 5)
 console.log('filter result', getFilter)

 //array element sum .....................
 let sum = 0;
 for(let i = 0; i < arr.length; i++){
    sum += arr[i]
 }
 console.log(sum)

 // array element reverse ................ 
 let reverse = []

 for(let i = arr.length-1; i >= 0; i--){
    reverse.push(arr[i])
 }
 console.log(reverse)

 //array sum with reduce methods
 const nestedArray = [[1, 2], [3, 4], [5, 6]];
 let sumResult = nestedArray.flat().reduce((acc, val)=> acc + val, 0)
 console.log(sumResult)