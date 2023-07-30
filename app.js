// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let a =10
// document.write("The value of is  a :" + " ", a + "<br>" +"<br>")
// document.write( "The value  of ++a  is: 11  " +"<br>"  +"<br>" + "Now the value of a is : "  +  "  " ,++a)
// document.write( "<br>" +"<br>" +"The value  of a++  is: 11  " +"<br>" + "<br>"+ "Now the value of a is : "  +  "  " ,a++)
// document.write( "<br>" +"<br>" +"The value  of --a  is: 11  " +"<br>" + "<br>"+ "Now the value of a is : "  +  "  " ,--a)
// document.write( "<br>" +"<br>" +"The value  of a--  is: 11  " +"<br>" + "<br>"+ "Now the value of a is : "  +  "  " ,a--)

// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

//  document.write("The value of is  a :" +  " ", a  +"<br>")
//  document.write("result of --a :" , --a )
//  document.write("<br>" +"<br>" + "The result of is  --a - b-- : " + " ", --a - b-- )
//  document.write("<br>" +"<br>" + "The result of is  --a - --b + ++b  : " +"  " + " ", --a - b-- + ++b )
//  document.write("<br>" +"<br>" + "The result of is  --a - --b + ++b + b--  : " + "  " + "  ", --a - --b + ++b + b-- )

//  3. Write a program that takes input a name from user &
// greet the user.

// let userName = prompt("whats is your name")
// document.write("Hello "  + userName  +"  " + " Hi how are you ??")

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let tables = +prompt ("type any number")

// for (let i=1; i<=10; i++){
//     console.log(tables + " x " + i + " =" + tables*i) 
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


const calc=() =>{
    let eng = document.getElementById('eng').value;
    let math = document.getElementById('math').value;
    let urdu = document.getElementById('urdu').value;

    let totalMarks = parseFloat(eng) + parseFloat(math) + parseFloat(urdu);
    document.write(totalMarks + "<br> ")
   
    let perc = (totalMarks/300)*100;
    document.write(perc)
}
