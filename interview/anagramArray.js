function sortedAnagram(strs){
    let groups = {}

    for(let word of strs){
        let sortedWord = word.split("").sort().join("")
        if(!groups[sortedWord]){
            groups[sortedWord] = []
        }
        groups[sortedWord].push(word)
    }

    return Object.values(groups)
}

console.log(sortedAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]).reverse())


//word anagram 

function wordAnagram(word1, word2){
    const normalized = (word)=> word.toLowerCase().replace(/[^\w]/g, "")

    const sortedWord1 = normalized(word1).split("").sort().join("")
    const sortedWord2 = normalized(word2).split("").sort().join("")

    return sortedWord1 === sortedWord2;
}

console.log(wordAnagram("listen","SPEAKS"))