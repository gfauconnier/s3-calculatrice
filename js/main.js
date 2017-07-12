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
