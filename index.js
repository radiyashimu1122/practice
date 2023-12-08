var age = 30;
// console.log(typeof age);
var status =true;
// console.log (typeof status);
const num1 =30.555;
// console.log( parseInt (num1));
const num2 =30.5;
const num3 =15.5;
const num4 = parseInt (num2-num3);
// console.log(num4);
var age = 50;
if (age>=50 ) {
 // console.log("Tumi ekjon briddho manush")
}
else if (age<18) {
  // console.log("Tumi baccha manush");
}
else {
// console.log("Error")
}
// This is object
var person ={
 name:"Radiya Akther Shimu",
 age:19,
}
// console.log(person);
// console.log(person.name);
// This is Array
var array = [1,2,3,4];
array.shift();
// array.unshift("glass");
// array.pop();
// array.push("shimu");
// console.log(array[1]);
console.log (array);
 // This is loop
 var numbers =["s","p"];
 
// for (var i = 0;i <numbers.length;i++){
// console.log(numbers[i]);
// }
//  for (var index = 0; index <10; index++) {
// console.log(index);
// }
// for(var i =0;i<numbers.length;i++){
//   var element = numbers[i];
//   if (element ==5) {
//     console.log("paisi tore")
//   }
//   else{
//     console.log("pai nai")
//   }
// }
// This is function
// function addTwoNumber(s,p) {
  // console.log(s+p);
  // var result =s-p;
  // return result;
// }
// var output = addTwoNumber(29,50);
// console.log( output)
// addTwoNumber(34,69);
// addTwoNumber(89,69);
function addTwoNumber(num) {
if (num%2==0) {
  return "eta ekta jor sonkha"
}
else{
  return "eta ekta bijor sonkha"
}
}
var output =addTwoNumber(9);
console.log(output);
