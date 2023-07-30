// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let EmptyArr = [[] , [] , []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var MatrixArr = [
//     [0, 1,2,3],
//     [1, 0,1,2],
//     [2, 1, 0,1]
    
//     ];
//     console.log(MatrixArr);
    
    // 3. Write a program to print numeric counting from 1 to 10.

    // let num = 1;
    // for(let num =1; num<=10; num++){
    //     console.log(num)
    // }

//     4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let tables = +prompt ("Enter a number to show multiplication ")

// for (let i=1; i<=10; i++){
//     console.log(tables + " x " + i + " =" + tables*i) 
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange','strawberry']

// for (let j=0; j<fruits.length; j++){
//     console.log("Element of arry " +  j +")" + " "+fruits[j])
// }


// 6. Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for (let count =1; count<=15; count++){
//     console.log(count)
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// for (let i =10; i>=1; i--){
//     console.log(i)
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// for (let Even=0; Even<=20; Even++){
//     if(Even % 2 ==0  ){
//     console.log(Even)
//     }
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (let odd=0; odd<=20; odd++){
//     if(odd % 2 !=0  ){
//     console.log(odd)
//     }
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for (let Even=1; Even<=20; Even++){
//     if(Even % 2 ==0  ){
//     console.log(Even+"k")
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let userInput =prompt("welcome to abc bakery")
let items =["cake" ,"apple pie" ,"cookie" , "chips" , "patties"]
let found = false;
for (let i = 0; i<items.length; i++){
    if(userInput === items[i]){
        console.log("found" + " " + userInput)
        found = true;
        break
        }
}

if(!found){
    console.log("not found" + " " + userInput)
    }
