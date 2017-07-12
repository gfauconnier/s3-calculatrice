var tempN = ["", "", "nb"],
  affN = "0";

document.getElementById("btnequ").addEventListener('click', equButton)
document.getElementById("btnc").addEventListener('click', cButton);
document.getElementById("btnreset").addEventListener('click', resetButton);

var calcnumcl = document.getElementsByClassName("calcnum");
Array.from(calcnumcl).forEach(function(element) {
  element.addEventListener('click', numClick);
});

var opecl = document.getElementsByClassName("calcope");
Array.from(opecl).forEach(function(element) {
  element.addEventListener('click', opeClick);
});
