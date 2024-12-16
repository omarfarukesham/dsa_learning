// function checkPlaindromWords(sentence) {
//     let sentenceClean = sentence.toLowerCase().replace(/[^\w]/g, ""); 

//     for (let i = 0; i < sentenceClean.length / 2; i++) {
//         if (sentenceClean[i] !== sentenceClean[sentenceClean.length - i - 1]) {
//             return `The sentence [${sentence}] is not a palindrome.`;
//         }
//     }
//     return `The sentence [${sentence}] is a palindrome.`;
// }

// // Test the function

function checkPlaindrom(sent){
    const cleanSent =  sent.toLowerCase().replace(/[^\w]/g, "")
    // console.log(cleanSent)
    for(let i = 0; i < cleanSent.length/2; i++){
        if(cleanSent[i] !== cleanSent[cleanSent.length - i -1]){
            return false;
        }
    }
    return true;
}

const result = checkPlaindrom('level');
console.log(result);


// const word = 'hello world';

// console.log(word.split("").reverse(word).join(""))
  
function reverseWord(word){
    let reverse = ""
    for(let i = word.length -1; i >= 0; i--){
        reverse += word[i]
    }
    return console.log(reverse); 
}

reverseWord("ollay")
