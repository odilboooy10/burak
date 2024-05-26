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

// TASK-T

// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//   let newArr = arr1
//   for( let i = 0; i < arr2.length; i++) {
//     newArr.push(arr2[i])
//   }

//     return newArr
// }

// console.log(mergeSortedArrays([1,2,3],[4,5,6,7,8,9]));

// TASK-U

// function countOddNumbers(n: number): number {
//    let count = 0;
//    for (let i = 1; i <= n; i += 2) {
//       count++;
//    }
//    return count;
// }

// console.log(countOddNumbers(3));
// console.log(countOddNumbers(11));

// TASK - V

// function countChars(s: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};
//   for (const char of s) {
//     if (char in charCount) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return charCount;
// }

// const charCount = countChars("Mexanizatsiyalashtirilmaganligidandirda");
// console.log("Mexanizatsiyalashtirilmaganligidandirda:" ,charCount);

// Task - W

// function chunkArray(arr: number[], chunkSize: number): number[][] {
//   const chunkedArray: number[][] = [];

//   for(let i = 0; i < arr.length; i += chunkSize) {
//      const chunk = arr.slice(i, i + chunkSize);
//      chunkedArray.push(chunk);
//   }

//   return chunkedArray
// }

// console.log("test:", chunkArray([1,2,3,4,5,6,7,8,9,10,11,12], 4));

// Task - X

// function countOccurrences(obj: any, key: string): number {
//    let count = 0;

//    function countKeys(obj: any): void {

//        if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
//            return;
//        }

//        for (const prop in obj) {

//            if (obj.hasOwnProperty(prop)) {

//                if (prop === key) {
//                    count++;
//                }

//                if (typeof obj[prop] === 'object') {
//                    countKeys(obj[prop]);
//                }
//            }
//        }
//    }
//    countKeys(obj);

//    return count;
//  }

//  const obj = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } };
//  console.log(countOccurrences(obj, 'model'));

// Task - Y

// function findIntersection(array1: number[], array2: number[]) {
//     const intersection = [];
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if(array1[i] === array2[j]) {
//                 intersection.push(array1[i])
//             }
//         }
//     }
//     return intersection;
// }

// const result = findIntersection([1,2,3], [3,2,0])
// console.log(result)

// Task - Z

// function sumEvens(array: number[]) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (array[i] % 2 === 0) {
//             sum += array[i]
//         }
//     }
//     return sum
// }

// const result = sumEvens([1, 2, 3, 4, 5])
// console.log(result)

// Task - ZA

// function sortByAge(arr: any[]): any[] {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[i].age < arr[j].age) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }

//   console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

// Task - ZB

// function randomBetween(num: number, num1: number) {
//   return Math.floor(Math.random() * ( num1 - num )) + num;
// }
//   console.log(randomBetween( 30, 50 )
// );

// Task - ZC

// function celsiusToFahrenheit(degree: number) {
//    return Math.floor((degree * 1.8) + 32)
// }

// const result = celsiusToFahrenheit(20)
// console.log(result)

// Task - ZD

// function changeNumberInArray(
//   index: number,
//   array: number[],
//   number: number
// ): number[] {
//   if (index >= 0 && index < array.length) {
//     const mutableArray = [...array];
//     mutableArray[index] = number;
//     return mutableArray;
//   } else {
//     return array;
//   }

// };

// TASK - ZE
// function removeDuplicate(str: string) {
//     let temp = ''
//     for (let i = 0; i < str.length; i++) {
//         if (temp.indexOf(str[i]) < 0) {
//             temp += str[i];
//         }
//     }
//     return temp;
// }
// const result = removeDuplicate('MIIT')  //output should be: string
// console.log(result)
// Task - ZF
// function capitalizeWords(input: string): string {
//   const words: string[] = input.split(" ");
//   const capitalizedWords: string[] = [];
//   for (const word of words) {
//     if (word.length <= 2) {
//       capitalizedWords.push(word);
//     } else {
//       capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//     }
//   }
//   return capitalizedWords.join(" ");
// }
// console.log(capitalizeWords("i am full stack developer"));

// TASK - ZG
// function capitalizeWords(input: string): string {
//   const words: string[] = input.split(" ");
//   const capitalizedWords: string[] = [];
//   for (const word of words) {
//     if (word.length <= 2) {
//       capitalizedWords.push(word);
//     } else {
//       capitalizedWords.push(word.charAt(0) + word.slice(1));
//     }
//   }
//   return capitalizedWords.join("_");
// }
// console.log(capitalizeWords("i am full stack developer"));

// TASK -ZH

// function findDisappearedNumbers(arr: number[]) {
//     const newArr: number[] = [];
//     const sortedArr = arr.sort((a, b) => a - b);

//     const min = sortedArr[0];
//     const max = sortedArr[sortedArr.length - 1];

//     for (let i = min + 1; i < max; i++) {
//       if (!sortedArr.includes(i)) {
//         newArr.push(i);
//       }
//     }

//     return newArr;
//   }

//   const arr = [1, 3, 7, 4];
//   const answer = findDisappearedNumbers(arr);
//   console.log(answer);

// TASK - ZI

// function delayHelloWorld(str: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(str);
//     }, 3000);
//   });
// }

// delayHelloWorld("Hello World").then((data) => console.log(data));

// TASK - ZJ

// function reduceNestedArray(arr: (number | any)[]): number {
//   return arr.reduce((acc, val) => {
//       if (Array.isArray(val)) {
//           return acc + reduceNestedArray(val);
//       } else if (typeof val === 'number') {
//           return acc + val;
//       } else {
//           return acc;
//       }
//   }, 0);
// }
// console.log(reduceNestedArray([1, [1, 2, [5]]]));

// ZK-TASK:

// function printNumbers() {
// 	const interval = setInterval(() => {
// 		for (let i = 1; i <= 5; i++) {
// 			console.log(i);
// 		}
// 	}, 1000);
// 	setTimeout(() => {
// 		clearTimeout(interval);
// 	}, 5000);
// }

// printNumbers();

// ZL-TASK:
// function stringToKebab(str: string) {
//   let new_str = str.split(" ");
//   let toLower = new_str.map(function (letter) {
//     return letter.charAt(0).toLocaleLowerCase() + letter.slice(1);
//   });
//   return toLower.join("-");
// }

// const result = stringToKebab("I Love Kebab");
// console.log("result:", result);

// Task - ZM

// function reverseInteger(n: number): number {
//   let str_n = n.toString();

//   let reversedStr: string;
//   if (str_n[0] === "-") {
//     reversedStr = "-" + str_n.slice(1).split("").reverse().join("");
//   } else {
//     reversedStr = str_n.split("").reverse().join("");
//   }
//   return parseInt(reversedStr, 10);
// }

// console.log(reverseInteger(123456789));

// Task - ZN

// function rotateArray(arr: number[], index: number): number[] {
//   const rotated: number[] = [];
//   const len: number = arr.length;
//   index = (index - 1) % len;

//   for (let i = len - index; i < len; i++) {
//     rotated.push(arr[i]);
//   }

//   for (let i = 0; i < len - index; i++) {
//     rotated.push(arr[i]);
//   }

//   return rotated;
// }

// const result: number[] = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(result);

// Task ZO

// function areParenthesesBalanced(input: string): boolean {
//   if (!input.includes('(') && !input.includes(')')) {
//       return false;
//   }
//   let balance = 0;
//   for (let char of input) {
//       if (char === '(') {
//           balance++;
//       } else if (char === ')') {
//           balance--;
//       }
//       if (balance < 0) {
//           return false;
//       }
//   }
//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("string)ichida(qavslar(")); // false
// console.log(areParenthesesBalanced("string(ichida(qavslar)soni()balansda(")); // false
// console.log(areParenthesesBalanced("((()))")); // true
// console.log(areParenthesesBalanced("(()))(")); // false
// console.log(areParenthesesBalanced("string")); // false

// Task ZP

// function majorityElement(nums: number[]): number {
//   const count: { [key: number]: number } = {};

//   for (const num of nums) {
//     if (count[num] !== undefined) {
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   }

//   let majority = nums[0];
//   let maxCount = 0;

//   for (const num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       majority = Number(num);
//     }
//   }

//   return majority;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// TASK ZQ

function findDuplicates(nums: number[]): number[] {
  const duplicates: number[] = [];
  const seen: Set<number> = new Set();
  const seenDuplicates: Set<number> = new Set();

  for (const num of nums) {
    if (seen.has(num) && !seenDuplicates.has(num)) {
      duplicates.push(num);
      seenDuplicates.add(num);
    }
    seen.add(num);
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
