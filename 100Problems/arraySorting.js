function arraySortedFun(nums){
    let sortedArray = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i + 1]){
            sortedArray.push(nums[i])
          
        }
    }
    return sortedArray
}


const arr = [1,1,2,2,3,3,4,5]

const getResult  = arraySortedFun(arr)

console.log(getResult)