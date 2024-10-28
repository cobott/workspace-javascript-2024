// get the element 
let spanE = document.getElementById('num1');
let spanA = document.getElementById('num2');
// element --- property
let n1 = parseInt(spanE.textContent);
let n2 = parseInt(spanA.textContent);
console.log(typeof n1);
// var num1 = parseInt(document.getElementById('n1').textContent); 



//process
 var c = n1 + n2;

//display
document.write(c);