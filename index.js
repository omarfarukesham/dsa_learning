//iterative approach 

// function factorialFun(n){
//     let factorialValue = 1
//     for(let i = n; i >= 1; i--){
//             factorialValue = factorialValue*i
//     }
  
//     return factorialValue;
// }

//  const getFatorialResult = factorialFun(5)
//  console.log(getFatorialResult)

// DSA - iterative approach time complexity O(n), space complexity 0(1)

// recursive approach 

function recursiveFun(n){
    if(n === 0){
        return 1;
    }else{
        return n*recursiveFun(n-1)
    }
}

const getFatorialResult = recursiveFun(5)
console.log(getFatorialResult)

// DSA - rcursive approach time complexity O(n), space complexity 0(n)