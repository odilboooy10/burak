/*console.log("TRAIN TASKS!!!");

// H-TASK

function getPositive(arr: number[]) {
    let positiveNums = ''

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 0) {
           positiveNums += arr[i]   
        }
     }

     return positiveNums
}

console.log(getPositive([21,-48,211,-10,596]));

*/

/* Project Standards:
   - Logging standards
   - Naming standards
       function, method, variable => CAMEL case
       class => PASCAL
       folder => KEBAB
       css => SNAKE

   - Error handling

   
*/

/*
Traditional API
Rest API
GraphQL API
...
*/


// TASK I

// function getDigits(str: string){
  
//    const digits = str.match(/\d/g);
 
//    return digits?.join("")
//  }
 
//  console.log(getDigits("qw1e34r56ty"));


//J-TASK

// function findLongestWord(str: string) {
//    const splitedStr = str.split(" ")
   
//    let longestWord = splitedStr[0]

//    for(let word of splitedStr) {       
 
//     if(word.length >= longestWord.length) longestWord = word
    
//    }

  
//   return longestWord
// }

// console.log(findLongestWord('Balki u Mexanizatsiyalashtirilmaganligidandirda'));


// K-TASK
// function countVowels(str: string) {
//   return str.match(/[aeiou]/ig)?.length
// }

// console.log(countVowels('Mexanizatsiyalashtirilmaganligidandirda'));


// L-TASK
function reverseSentence(str: string) {
  const splittedStr = str.split(' ')
  let reversedStr = []

  for(const word of splittedStr){
    reversedStr.push(word.split('').reverse().join(""))
  }

  return reversedStr.join(' ')
} 

console.log(reverseSentence('Salomat!'));