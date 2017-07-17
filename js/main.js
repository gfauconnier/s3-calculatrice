// tempN will store temporary values of the calculator value to calculate, last operator clicked and last
// type of button clicked
var tempN = ["", "", "nb"],
  affN = "0"; // affN will be the var displayed in p

// event listener for unique buttons (i.e. : function is only called by one button)
document.getElementById("btnequ").addEventListener('click', equButton)
document.getElementById("btnc").addEventListener('click', cButton);
document.getElementById("btnreset").addEventListener('click', resetButton);
document.getElementById("btnpm").addEventListener('click', pmButton);
document.getElementById("btnnight").addEventListener('click', nightButton);

// add event for 'number' and '.' buttons
var calcnumcl = document.getElementsByClassName("calcnum");
Array.from(calcnumcl).forEach(function(element) {
  element.addEventListener('click', numClick);
});

// add event for operators buttons
var opecl = document.getElementsByClassName("calcope");
Array.from(opecl).forEach(function(element) {
  element.addEventListener('click', opeClick);
});

/**
 * numClick - when a number or '.' is clicked will do some checks (only one '.' for example) and then
 * will display the clicked button in p
 *
 * @return {type}  no return only display
 */
function numClick() {
  var t = this.id;

  if (tempN[2] == "nb") { // a 'number' button was last clicked the checks if only one '.' or if 0 is the first element : replaces it by a number, doesn't add another 0
    t != "btnpt" ? (affN == "0" && t == "0" ? affN = affN : (affN == "0" && t != "0" ? affN = t : affN += t)) : affN.split("").includes(".") ? affN = affN : affN += ".";
  }
  else { // if an operator button was last clicked only checks if '.' is the button clicked
    t != "btnpt" ? affN = t : affN = "0.";
  }
  tempN[2] = "nb";
  affResult();
}

/**
 * opeClick - check if there where already a number stocked in tempN, then if last button clicked if it's
 * an operator, changes the tempN[1], else does the calculation
 *
 * @return {type}  no return only display
 */
function opeClick() {
  if (tempN[0] == "") { // if tempN[0] is empty affects affN in it
    tempN[0] = affN;
    tempN[1] = this.innerHTML; // affects the operator in tempN[1]
    affN = "0";
    affResult();
  }
  else {
    if (tempN[2] == "op") { // last clicked button was an operator : just changes the temp operator
      tempN[1] = this.innerHTML;
    }
    else {
      switch (tempN[1]) { // last clicked was a number : calculates depending on temp number and operator
        case "+":
          affN = parseFloat(tempN[0]) + parseFloat(affN);
          break;
        case "-":
          affN = parseFloat(tempN[0]) - parseFloat(affN);
          break;
        case "*":
          affN = parseFloat(tempN[0]) * parseFloat(affN);
          break;
        case "/":
          affN = parseFloat(tempN[0]) / parseFloat(affN);
          break;
      }
      tempN[0] = affN;
      affResult();
      tempN[1] = this.innerHTML;
    }
  }
  tempN[2] = "op";
}

/**
 * equButton - launches opeClick function and changed last clicked type in tempN
 *
 * @return {type}  no return only display
 */
function equButton() {
  tempN[2] = "nb";
  opeClick();
}

/**
 * pmButton - changes the sign of the displayed number
 *
 * @return {type}  no return only display
 */
function pmButton() {
  if (Number(affN) > 0){
    affN = "-" + affN;
  }
  else if (Number(affN) < 0) {
    affN = Math.abs(Number(affN));
  }
  affResult();
}

/**
 * cButton - when clicked checks if affN length is > 1 , if so removes last number, else displays 0
 *
 * @return {type}  no return only display
 */
function cButton() {
  if (affN.length > 1 && affN[0] != "-") {
    affN = affN.split("");
    affN.pop();
    affN = affN.join("");
  }
  else if ((affN.length == 2 && affN[0] == "-") || (affN.length == 1 && affN[0] != "-")){
    affN = "0";
  }
  affResult();
}

/**
 * resetButton - resets global var and displays reseted affN in html
 *
 * @return {type}  no return only display
 */
function resetButton() {
  affN = 0;
  tempN = ["", "", "nb"];
  affResult();
}

/**
 * affResult - displays affN in html (p)
 *
 * @return {type}  no return only display
 */
function affResult() {
  document.getElementById("result").innerHTML = affN;
}

/**
 * nightButton - function that changes background color and font of result
 *
 * @return {type}  no return only display
 */
function nightButton(){
  document.getElementById("body").classList.toggle("night");
  document.getElementById("result").classList.toggle("night");
}
