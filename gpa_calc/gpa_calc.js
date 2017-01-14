var credit_arr = document.getElementsByClassName("credit");
var grade_arr = document.getElementsByClassName("grade");
var Answer = document.getElementById("result");
var CalcBtn = document.getElementById("calc_btn");

CalcBtn.addEventListener("click", disp_gpa, false);

/* setting initial values to 0 */
for (var i = 0; i < credit_arr.length; i++) {
  credit_arr[i].value = 0;
  grade_arr[i].value = 0;
}
Answer.value = 0;

/* displays calculated GPA */
function disp_gpa() {
  var gpa = 0;
  gpa = get_gpa();
  if (isNaN(gpa)) gpa = 0;
  Answer.value = gpa;
}

/* calclates GPA */
function get_gpa() {
  var grade_sum = 0;
  var credit_sum = 0;
  
  console.log(credit_arr)
  
  for (var i = 0; i < credit_arr.length; i++) {
    credit_sum += parseFloat(credit_arr[i].value);
  }
  
  for (var i = 0; i < credit_arr.length; i++) {
    var grade = parseFloat(grade_arr[i].value)
    var credit = credit_arr[i].value
    grade_sum += grade * credit / credit_sum 
  }
  return grade_sum
}
