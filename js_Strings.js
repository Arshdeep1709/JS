//          JS Strings

// Js Strings are used to store texts

// let a="Aayush"
// console.log(a)

// We can use single and double quotes to form a string

// let a='Aayush'
// let b="Ustat"
// console.log(a+'\n'+b)

// We can use quotes inside quoted but condition is they shouldn't match

// let a="Aayush shouldn't go with 'Ustat'"
// console.log(a)

// We can get the string length by using string inbuilt property
// It also counts the spaces and commas

// let a="Aayush is a 'good programmer'"
// console.log(a.length)


//      Escape Character

// for ex: we have to write : "Aayush is a "good Programmer""
// because we are using double quotes in the string
// for such problems we use escape characters:

// (/) bakslash turns special character into string

// let a="Aayush is a \"good Programmer\""
// console.log(a)

// let a='Aayush is \'great\''
// console.log(a)

// let a='It\'s okk'
// console.log(a)

// Six other escape sequence:

// \n : New line
// \t : Horizontal tab
// \r : Carraige return
// \f : Form feed
// \b : Backspace
// \v : vertical tab


//          Js String methods

// Javascript string length method

// The length property returns length of string
// It also counts the spaces and commas

// let a = 'Aayush, Ustat'
// let b = a.length;
// console.log(b)



// Javascript String slice() method:

// It accepts two parameters (start,end)
// according to the parameters it gives u sliced output
// It also counts the spaces and commas
// It counts position from 0
// If position is negetive it counts from the end

let a = "abcdefghijklmnopqrstuvwxyz";
let b = a.slice(5,10)
let c = a.slice(-4)
let d = a.slice(-3,-9)
console.log(d)

