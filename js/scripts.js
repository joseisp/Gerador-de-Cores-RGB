window.addEventListener('load', start);

var textA = null;
var textB = null;
var textC = null;
var inputA = null;
var inputB = null;
var inputC = null;
var image = null;

function start() {
  console.log('Carregou.');

  changeRange();
}

var rangeA = document.querySelector('#inputA');
var rangeB = document.querySelector('#inputB');
var rangeC = document.querySelector('#inputC');

rangeA.addEventListener('input', changeRange);
rangeB.addEventListener('input', changeRange);
rangeC.addEventListener('input', changeRange);

function changeRange() {
  inputA = document.querySelector('#inputA').value;
  inputB = document.querySelector('#inputB').value;
  inputC = document.querySelector('#inputC').value;
  textA = document.querySelector('#red');
  textB = document.querySelector('#Green');
  textC = document.querySelector('#Blue');
  deep = document.querySelector('#deep');

  var mirror = document.querySelector('#mirror');
  var colors = 'rgb(' + inputA + ', ' + inputB + ',' + inputC + ')';
  var sroloc = 'rgb(' + inputC + ',' + inputA + ',' + inputB + ')';
  mirror.style.backgroundColor = colors;
  deep.style.backgroundColor = sroloc;

  textA.value = inputA;
  textB.value = inputB;
  textC.value = inputC;
}
