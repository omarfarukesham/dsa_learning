function areAnagrams(word1, word2){
    const normalized =(word)=> word.toLowerCase().replace(/[^\w]/g, "")

    const sortedWord1 =  normalized(word1).split("").sort().join("")
    const sortedWord2 =  normalized(word2).split("").sort().join("")

    return sortedWord1 === sortedWord2
}


const getResult = areAnagrams('listen', 'silent')
const getResul2 = areAnagrams('Hello', 'world')
console.log(getResul2)