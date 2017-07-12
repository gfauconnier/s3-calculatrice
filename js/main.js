// tempN will store temporary values of the calculator value to calculate, last operator clicked and last
// type of button clicked
var tempN = ["", "", "nb"],
  affN = "0"; // affN will be the var displayed in p

// event listener for unique buttons (i.e. : function is only called by one button)
document.getElementById("btnequ").addEventListener('click', equButton)
document.getElementById("btnc").addEventListener('click', cButton);
document.getElementById("btnreset").addEventListener('click', resetButton);

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
