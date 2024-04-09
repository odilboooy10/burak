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
// function reverseSentence(str: string) {
//   const splittedStr = str.split(' ')
//   let reversedStr = []

//   for(const word of splittedStr){
//     reversedStr.push(word.split('').reverse().join(""))
//   }

//   return reversedStr.join(' ')
// } 

// console.log(reverseSentence('Salomat!'));

// M-TASK
// function getSquareNumber(arr: number[]){
//    let newArr = [];

//    for(let i = 0; i < arr.length; i++) {
//     newArr.push({number: arr[i], square: arr[i]*arr[i]})
//    }

//    return newArr
// }

// console.log(getSquareNumber([15,27,39]));

// N-TASK
// function palindromCheck(word: string) {
//   let backward = ''
//   let forward = word.toLowerCase()
//   for(let i = forward.length-1; i >= 0; i--){
//     backward += forward[i]
//   }

//   return backward === forward
// }

// console.log(palindromCheck('RACECAR'));

// O-TASK
// function calculateSumOfNumbers(arr: any[]) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length; i++){
//    if(typeof arr[i] === 'number') sum += arr[i]
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([456, "456", {number: 456}, true, 378]));

// // P-TASK
//  function objectToArray (obj:Object) {
  
//     return Object.entries(obj);
//  }

//  console.log(objectToArray( {a: 97, b: 98}));

// Q-TASK
//   function hasProperty(obj:any, str:string) {
//     let has = false
//     for (let key in obj) {
//         if(key === str) has = true
//         else has = false
//     }
//     return has
// }
// console.log('Got offer offer Got:');
// console.log(hasProperty({name: "BMW", model: "M3"}, "mmodel"));

// R-TASK

// function calculate(str:string) {
   
//     let plus = str.split('+');
    
//     let sum = 0;
//     for (let i of plus) {
//         sum += parseInt(i);
//     }
    
//     return sum;
// }
// console.log(calculate("1+3"));

// TASK S

// function missingNumber(arr: number[]) {
  
//   let missedNumbers = []
//   let sortedArr = arr.sort((a, b)=> a - b)

//    for(let i = 0; i <= sortedArr.length-2; i++) {
     
//     if(sortedArr[i] - sortedArr[i+1] !== -1) {
//       missedNumbers.push(sortedArr[i]+1)
//     } 

//    }

//    return missedNumbers.slice().join(',')
// }

// console.log('************', missingNumber([2,31,25,17,23,11]));

// function missingNumbers(arr: number[]) {
//   const max = Math.max(...arr); 
//   const min = Math.min(...arr); 
//   const missing = [];

//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
      
//       missing.push(i);
//     }
//   }
//   return missing.slice().join(',');
// }
// console.log('************', missingNumbers([2,31,25,17,23,11]));

//TASK-T

function mergeSortedArrays(arr1: number[], arr2: number[]) {
  let newArr = arr1
  for( let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i])
  }

    return newArr
}

console.log(mergeSortedArrays([1,2,3],[4,5,6,7,8,9]));



 