
//check a word is planidorm or not

function checkPlaindromWords(word){
    let wordCaseCheck = word.toLowerCase();

   for (let i = 0; i < wordCaseCheck.length; i++){
     if (wordCaseCheck[i] !== wordCaseCheck[wordCaseCheck.length - i - 1]){
       return false;
     }
   }
   return true;
}


const result = checkPlaindromWords('Level')

console.log(result)