// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let StudentName = ["Hina", "Sara", "Adeel", "Rehan"];

// Declare and initialize a strings array.

// let StringArr = ["Hina", "Sara", "Adeel", "Rehan"];

// Declare and initialize a numbers array.

// let NumberArr = [2, 4, 8, 9, 10, 55];

// Declare and initialize a boolean array.

// let BooleanArr = [true, false];

// 6. Declare and initialize a mixed array.

// let MixedArr = ['abc', 1, 4, 6, true, false]

// 7. Declare and Initialize an array and store available

// let DegreeArr = ["SSC" , "HSC" ,  "BCS",
// "BS" , "BCOM", "MS", "M.Phil.", "PhD."]

// for(let i=0; i<DegreeArr.length; i++){
//     console.log(i + ") " + DegreeArr[i])
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
 
// 9. Initialize an array with color names. Display the array
// elements in your browser.

let ColorNameS = [ "red" ,"blue" ,"green" , "black" ,"brown"];

console.log(ColorNameS)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// let ColorName = [ "red" ,"blue" ,"green" , "black" ,"brown"]; 
// ColorName.unshift("pink")
// console.log(ColorName)

//  let UpdateColor =  ColorName.unshift("pink")
// console.log(UpdateColor)


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
let ColorName = [ "red" ,"blue" ,"green" , "black" ,"brown"]; 
ColorName.push("yellow")
console.log(ColorName)

 let UpdateColor =  ColorName.push("yellow")
console.log(UpdateColor)
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.