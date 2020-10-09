var body = document.querySelector('body');
// target the body
var allButtons = document.querySelectorAll('button');
// // target the button
var screen = document.querySelector('#screen');
// target the screen


function inputChange(event){
  // get access to the button that was clicked
  var char = event.target.innerText;
  // declaring a variable to char and set it 
  // equal to event that will target the button 
  //that was clicked and return just the text
  console.log(char)
  // console.log the inside of the local variable
    if(char === 'AC'){
      // creating a if statement to a local variable 
      // and set it to strictly equal to the string of AC
      // the clear button from html

        screen.innerText = '';
        // variable screen will change the text inside the screen and set it equal to a empty string
        return;
        // return it with nothing when you click AC to clear everything inside the screen text
    } else if(char === ''){
      // setting a else if statement to specify a block of code to be executed, if the same condition is 
      // true with AC then Use else if to specify a new condition to test the delete button
      // inside the else if statement is a variable that is strictly equal to a delete button
        screen.innerText = screen.innerText.slice(0, -1);
        // inside the screen text will be equal to a screen that will change inside the screen text
        // and slice returns the selected elements in an array, as a new array object, and slice
        // selects the elements starting at the given start argument, and ends at, but does not 
        // include, the given end argument, so 0 is the beginning and -1 is deleting 1 number inside
        // screen text when you use the delete button to erase pne number

    } else if(char === '='){
      // creating an else if statement for the variable to strictly equal to the equal button
        myEval(screen.innerText)
        // my function eval will solve any function inside the screen inner text
        console.log(screen.innerText)
        // inside the screen text will be equal to eval that will solve the problem inside
        // the screen text to show the answer
        return;
        // return the answer
    }  
  screen.innerText += char;
  // change the calculator screen inner text adds the value of the right operand to a variable
  // and assigns the result to the variable char
  
}

function myEval(str){
  // created a function for my eval that is next to the parameter of string
  var solve = str.match(/[^0-9\. ]/g);
  // created a variable for solve so it can equal to str that was in the parameter
  // of my eval and match it to my rejects it is used to search a string, for a match, 
  // against a regular expression, it will return an Array object then the match is found

  console.log(solve)
  // console.log my local variable
  var n = str.split(solve)
  // created a variable of n as my number and equal to a string that will split a string into an 
  // array of my local variable solve, and returns the new array
  var firstN = Number(n[0])
  // created a variable of firstN as my first number to set it equal to a number that is my constructor
  // and set a value as n that is my local variable and 0 in the bracket as my first number
  var secN = Number(n[1])
  // created a variable of secN as my second number to set it equal to a number that is my constructor
  // and set a value as n that is my local variable as well and 1 in the bracket as my second number

  if(solve == '+'){
    // created a else if statement solve is equality equal to my plus button
    // once you click it to convert the variable
    console.log(n[0][1]);
    // console.log a method once you click my button to have my local variable n as my number
    // to have the variable of my first number and second number inside the bracket
    screen.innerText = firstN + secN
    // inside my screen text will be equal to my first number and add the second
    return;
    // return the answer when you click equal
  }else if(solve == '-'){
    // created a else if statement solve is equality equal to my subtract button
    // once you click it to convert the variable
    console.log(n[0][1]);
    // console.log a method once you click my button to have my local variable n as my number
    // to have the variable of my first number and second number inside the bracket
    screen.innerText = firstN - secN
    // inside my screen text will be equal to my first number and subtracting the second number
    return;
    // return the answer when you click equal
  }else if(solve == '÷'){
    // created a else if statement solve is equality equal to my divide button
    // once you click it to convert the variable
    console.log(n[0][1]);
    // console.log a method once you click my button to have my local variable n as my number
    // to have the variable of my first number and second number inside the bracket
    screen.innerText = firstN / secN
    // inside my screen text will be equal to my first number and divide the second number
    return;
    // return the answer when you click equal
  }else if(solve == 'x'){
    // created a else if statement solve is equality equal to my multitply button
    // once you click it to convert the variable
    console.log(n[0][1]);
    // console.log a method once you click my button to have my local variable n as my number
    // to have the variable of my first number and second number inside the bracket
    screen.innerText = firstN * secN
    // inside my screen text will be equal to my first number and multiply the second number
    return;
    // return the answer when you click equal
  }
}

function addAllEventListeners(arr){
  // created a function for all buttons inside the parameter, my array

  for(var i = 0; i < arr.length; i++){
      // iterate over the array
    arr[i].addEventListener('click', inputChange);
    // target the current element allow it to listen for a click
    // if that click happens call the input change function
  }
 }
addAllEventListeners(allButtons);
// assigns all buttons to function and be able to click it
// and show up inside the screen text