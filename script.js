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
        myEval() // my function
        screen.innerText = eval(screen.innerText)
        return;
    }  
  // // change the calculator screen's inner html
  screen.innerText += char;
  
}

function myEval(str){
  var solve = str.match(/[^0-9 \.]/g);

  console.log(solve)
  var n = str.split(solve)
  var firstN = Number(n[0])
  var secN = Number(n[1])

  if(solve == '+'){
    console.log(n[0][1]);
    screen.innerText = firstN + secN
    return;
  }else if(solve == '-'){
    console.log(n[0][1]);
    screen.innerText = firstN - secN
    return;
  }else if(solve == '÷'){
    console.log(n[0][1]);
    screen.innerText = firstN / secN
    return;
  }else if(solve == 'x'){
    console.log(n[0][1]);
    screen.innerText = firstN * secN
    return;
  }
}

function addAllEventListeners(arr){

  for(var i = 0; i < arr.length; i++){
      // iterate over the array
    arr[i].addEventListener('click', inputChange);
    // target the current element allow it to listen for a click
    // if that click happens call the input change function
  }
 }
addAllEventListeners(allButtons);