// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your First Name");
// let LastName = prompt("Enter your Last Name");
//   alert (firstName + " " + LastName) 

//   2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// let text = prompt("Enter you favourite mobile phone name")
// let modelNum = text.length;
// alert(modelNum)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// let word = "pakistani"
// let wordsIndex = word.indexOf("n")
// alert("index of n :" + " "+ wordsIndex)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let LetterFind = "Hello world"
// let LetterIndex = LetterFind.lastIndexOf("l")
// alert("Last index of : "+ " "+ LetterIndex)

// 5.Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let word = "pakistani"
// let wordsIndex = word.charAt(3)
// alert("charater at index  of 3rd :" + " "+ wordsIndex)

// 6. Repeat Q1 using string concat() method.
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let cityName ="Hyderabad"
// let replaceName= cityName.replace("Hyder" ,"Islam");
// alert(replaceName)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let  message = 'Ali and Sami are best friends. They play cricket and football together';

// let  sentences =message.replaceAll("and" ," &")
// console.log(sentences)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let  text = "472";
// console.log(" type:"+ typeof(text) +"  "+ "value :"+ text)
// let num= 472
// console.log(" type:"+ typeof(num) +"  "+ "value :"+ num)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInput = prompt("peanuts");
// let getUserInput = userInput.toUpperCase()
// alert(getUserInput)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// const str = "javascript";
// let titleCase = "";
// str.split(" ").forEach(word => {
//     const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     titleCase += capitalizedWord;
// });
// console.log(titleCase)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let num = 35.36;
let txt = num.toString().replace("." , "")
console.log("Result:"+ " " +txt)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// 17. Write a program to display the last character of a user
// input.
let words  = prompt("user input");

let  wordsIndex = words.charAt(7)
console.log("last character of input  :  "+ " "+ wordsIndex)