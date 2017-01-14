/*for linked list*/
var memory;

var current;    //for the display
var memr;   //should store as a float, otherwise has to check whether a decimal is present without any number..?
var num_1;  //number on the left hand side of the operation symbol, initialized to 0
var num_2;   //number on the right hand side of the operation symbol, initialized to null
var result;
var op_symbol;   //used to store the operation symbol, initalized to "none"
var last_input_num;  //This variable is used to keep track of the last input. If it is true, then the last button the user clicked on was a number or a decimal point, or "MR", if it is false, then the last button user clicked on is "=", or "+", or "-", or "*", or "/". The button or "M+" or "M-" or "MC" will never change the value of this variable. 
//The only reason for using this variable is to make sure when user click on a number or the decimal point, it is displayed correctly.
var in_error_state; //whether the calculator is in an error state. The calculator should be "locked" in this case
var holder;    //used to hold memory value when calculator is cleared

function initialize_calu() {
  current = "0";    //for the display
  memr = 0;
  num_1 = 0;
  num_2 = null;
  result = 0;
  op_symbol = "none";   
  last_input_num = true  //This variable is used to keep track of the last input. If it is true, then the last button the user clicked on was a number or a decimal point, or "MR", if it is false, then the last button user clicked on is "=", or "+", or "-", or "*", or "/". The button or "M+" or "M-" or "MC" will never change the value of this variable. 
  //The only reason for using this variable is to make sure when user click on a number or the decimal point, it is displayed correctly.
  in_error_state = false; //whether the calculator is in an error state. The calculator should be "locked" in this case
}

var Display = document.getElementById("display");
var Memory = document.getElementById("memory");
var Answer = document.getElementById("answer");

button_arr = [];  //an array of all the buttons. Used so can add event listener to them with a .forEach loop
var button_0 = document.getElementById("zero");
var button_1 = document.getElementById("one");
var button_2 = document.getElementById("two");
var button_3 = document.getElementById("three");
var button_4 = document.getElementById("four");
var button_5 = document.getElementById("five");
var button_6 = document.getElementById("six");
var button_7 = document.getElementById("seven");
var button_8 = document.getElementById("eight");
var button_9 = document.getElementById("nine");
var button_dot = document.getElementById("dot");
var button_plus = document.getElementById("plus");
var button_minus = document.getElementById("minus");
var button_equal = document.getElementById("equal");
var button_multiply = document.getElementById("multiply");
var button_divide = document.getElementById("divide");
var button_exponent = document.getElementById("exponent");
var button_sqroot = document.getElementById("sqroot");
var button_mod = document.getElementById("mod");
var button_sign = document.getElementById("sign");
var button_C = document.getElementById("C");
var button_MR = document.getElementById("MR");
var button_MC = document.getElementById("MC");
var button_Mplus = document.getElementById("M+");
var button_Mminus = document.getElementById("M-");
var button_MS = document.getElementById("MS");
var button_sin = document.getElementById("sin");
var button_cos = document.getElementById("cos");
var button_tan = document.getElementById("tan");
var button_rad_deg = document.getElementById("rad-deg");

button_arr.push(button_0);
button_arr.push(button_1);
button_arr.push(button_2);
button_arr.push(button_3);
button_arr.push(button_4);
button_arr.push(button_5);
button_arr.push(button_6);
button_arr.push(button_7);
button_arr.push(button_8);
button_arr.push(button_9);
button_arr.push(button_dot);
button_arr.push(button_plus);
button_arr.push(button_minus);
button_arr.push(button_equal);
button_arr.push(button_multiply);
button_arr.push(button_divide);
button_arr.push(button_exponent);
button_arr.push(button_sqroot);
button_arr.push(button_mod);
button_arr.push(button_sign);
button_arr.push(button_C);
button_arr.push(button_MR);
button_arr.push(button_MC);
button_arr.push(button_Mplus);
button_arr.push(button_Mminus);
button_arr.push(button_MS);
button_arr.push(button_sin);
button_arr.push(button_cos);
button_arr.push(button_tan);
button_arr.push(button_rad_deg);

initialize_calu();  //initialize the calculator

function switch_num() { //turn the current into a float and store it in num_1
  num_1 = parseFloat(current);
  //console.log("num_1 just parsed! Parsed number: " + num_1);    //for testing
}

//check to see if current has a decimal point without numbers after it
//if so, delete it
function delete_trailing_dot(){ 
  if(current.charAt(current.length - 1) === ".") { 
      current = current.slice(0, -1); //if so, delete the trailing decimal point
  }
}

//The function checks whether a complete, explicit equation has been given by the user (meaning the user has picked out the arithmetic operator and has explicitly picked a number that is supposed to go on the right hand side of the operator, by clicking or typing).
function is_valid_equation() {
  return ((last_input_num) && !(op_symbol==="none"));
}


//Compute the value of an equation. Also reset some of the variables back to their default values.
function compute_and_reset () {
  num_2 = parseFloat(current);
  if(op_symbol === "+") {
    result = num_1 + num_2;
  }else if(op_symbol === "-") {
    result = num_1 - num_2;
  }else if(op_symbol === "*") {
    result = num_1 * num_2;
  }else if(op_symbol === "/") {
    if (num_2 === 0) {    //division by zero!
      in_error_state = true;
      result = "Error. Division by 0";
    }else{
      result = num_1 / num_2;
    }
  }else if(op_symbol === "^") {
    result = Math.pow(num_1, num_2);
  }else if(op_symbol === "%") {
    result = num_1 % num_2;
  }else{
    window.alert("Something went wrong. For the developer, check the joe_doe function. (The name could be inaccurate since it could have been changed by someone else.)");
  }
  //Updated the string current
  current = result + "";

  //Reset the states of the calculator
  num_1 = 0;
  num_2 = null;
  result = 0;
  last_input_num = false;
  op_symbol = "none";
}

function switch_and_add_op(current_op){
  switch_num();
  op_symbol = current_op;
  last_input_num = false;
}

function get_op(event_object) {
  var op_id = event_object.currentTarget.id;
  switch (op_id) {
    case "zero":
      return "0";
      break;
    case "one":
      return "1";
      break;
    case "two":
      return "2";
      break;
    case "three":
      return "3";
      break;
    case "four":
      return "4";
      break;
    case "five":
      return "5";
      break;
    case "six":
      return "6";
      break;
    case "seven":
      return "7";
      break;
    case "eight":
      return "8";
      break;
    case "nine":
      return "9";
      break;
    case "dot":
      return ".";
      break;
    case "plus":
      return "+";
      break;
    case "minus":
      return "-";
      break;
    case "equal":
      return "=";
      break;
    case "multiply":
      return "*";
      break;
    case "divide":
      return "/";
      break;
    case "exponent":
      return "^";
      break;
    case "sqroot":
      return "sqroot";
      break;
    case "mod":
      return "%";
      break;
    case "sign":
      return "sign";
      break;
    case "C":
      return "C";
      break;
    case "MR":
      return "MR";
      break;
    case "MC":
      return "MC";
      break;
    case "M+":
      return "M+";
      break;
    case "M-":
      return "M-";
      break;
    case "MS":
      return "MS";
      break;
    case "sin":
      return "sin";
      break;
    case "cos":
      return "cos";
      break;
    case "tan":
      return "tan";
      break;
    case "rad-deg":
      return "rad-deg";
      break;
    default:
      window.alert("Button unidentified yet or Something went wrong!");
      break;
  }
}

var big_function = function(event_object) {
  var op = get_op(event_object);
  console.log("You just clicked on the button: " + op);  //test string

  if(!in_error_state) {    
                                  //If the calculator is not in the error state, continue execution. Otherwise, wait until user clicked on the "C" button
    if(op === "0") {    //if the user clicked on "0"      //FINISHED
      if (current === "0") {  //if the calculator is already displaying "0"
        if(!last_input_num) { 
                                      //check to see if the user specified an operation before clicking on "0", if so toggle the boolean
                                      //Otherwise, do nothing
          last_input_num = true;
        }
      }else{
        if (!last_input_num) {  //if the user has specified an operation before clicking on "0"
          current = "0";
          last_input_num = true;
        }else{                  //if the user clicked on a number before clicking on "0"
          current = current + op;
        }
      }

    }else if (op === "1" || op === "2" || op === "3" || op === "4" || op === "5" || op === "6" || op === "7" || op === "8" || op === "9") {  //if the user clicked on a non-zero number      //FINISHED

      if(last_input_num) {  //if the calculator is in the inital state or if the user just clicked on a number
        if (current === "0") {    //if the display was showing "0"
          //console.log("should not appear!");
          current = op;           //replace "0" with the input value
        }else {               //if the calculator was already showing a non-zero string
          //console.log("This should appear!");
          current = current + op;//parseFloat(current + op);
        }
      }else {   //if the calculator was in some other state
        //console.log("This should not appear!");
        current = op;
        last_input_num = true //restore the last input state to num
      }

    }else if(op === "+" || op === "-" || op === "*" || op === "/" || op === "^" || op === "%"){      //FINISHED
      delete_trailing_dot();  //check to see if current has a decimal point without numbers after it if so, delete it
      if(is_valid_equation()){
        compute_and_reset();
      }
      switch_and_add_op(op);
    
    }else if(op === "sqroot"){
      current = parseFloat(current);
      if(current < 0){
        in_error_state = true;
        current = "Error. Negative square root."
      }else{
        current = Math.sqrt(current) + "";
        Answer.innerHTML = current;
      }
    
    }else if(op === "sign") {  //just multiply current by -1
      current = parseFloat(current);
      current = current * (-1);
      current = current + "";  //change back to string

    }else if(op === "=") {      //FINISHED
      delete_trailing_dot();  //check to see if current has a decimal point without numbers after it if so, delete it
      if(op_symbol === "none"){   //if user didn't specify an arithmetic operation before clicking "equal"
        last_input_num = false;
      }else{    //if there was an arithmetic operation specified before clicking "equal"
        display_function();
        compute_and_reset();
        //Answer.innerHTML = current;
      }

    }else if(op === ".") {      //FINISHED
      if(last_input_num) {  //Need more comments for this else if!
        if(current.includes(".")){  //if the calculator is already displaying a decimal point
        //do nothing
        }else {
          current = current + ".";  //add a decimal point
        }
      }else {
        current = "0.";  //reset the current
      }
      last_input_num = true;
      
    }else if(op === "MR") { //change display to memory
      current = memr + "";
      last_input_num = true;
      Memory.innerHTML
    }else if(op === "MS") {
      memr = current;
      Memory.innerHTML = memr;

    }else if(op ==="M+") {
      delete_trailing_dot();
      num_2 = parseFloat(current);
      memr = parseFloat(memr);
      memr = memr + num_2;
      num_1 = 0;
      num_2 = null;
      result = 0;
      last_input_num = false;
      op_symbol = "none";
      Memory.innerHTML = memr;

    }else if(op === "M-") {
      delete_trailing_dot();
      num_2 = parseFloat(current);
      memr = parseFloat(memr);
      memr = memr - num_2;
      num_1 = 0;
      num_2 = null;
      result = 0;
      last_input_num = false;
      op_symbol = "none";
      Memory.innerHTML = memr;

    }else if(op === "MC") {  //clear memory
      memr = 0;
      Memory.innerHTML = 0;

    }else if (op === "sin"){
      current = parseFloat(current);
      current = Math.sin(current);
      current = current + "";  //change back to string
    }else if (op === "cos"){
      current = parseFloat(current);
      current = Math.cos(current);
      current = current + "";  //change back to string
    }else if (op === "tan"){
      current = parseFloat(current);
      current = Math.tan(current);
      current = current + "";  //change back to string
    }else if(op === "rad-deg"){
      current = parseFloat(current);
      current = current * 180/Math.PI;
      current = current + "";  //change back to string
    }else if (op !== "C"){
      window.alert("Something went wrong!!!! Check the last else statement after a bunch of \"else ifs\"");
    }
  }
  if(op === "C"){ //save value of memr, re-initialize calculator, and restore memr.
    holder = parseFloat(memr);
    initialize_calu();
    Answer.innerHTML = 0;
    memr = holder;
  }

  console.log("The current value displaying: " + current);
  //Change the display
  Display.innerText = current;
  display_function();
}

/* displays current function in answer box */
function display_function() {
  var output = "";
  if (num_1) {
    if (current) {
      Answer.innerHTML = current;
    }
    if (!last_input_num) {
      Answer.innerHTML = current + op_symbol;
    }
    if (num_1 && op_symbol != "none" &&last_input_num) {
      Answer.innerHTML = num_1 + op_symbol + current;
    }
  }
}

function add_event_listener(current, index, array) {
  current.addEventListener("click", big_function, false);
}
button_arr.forEach(add_event_listener);     //add event listeners to all the buttons
