// Write a JavaScript program to display the current day and time in the following format.

var date=new Date();
var k=date.toString();
var day={0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thrusday',5:'Friday',6:'Saturday'}
console.log(k);
console.log(day[date.getDay()])
console.log(date.getDate())
console.log(new Date(date.getTime()))
console.log(date.getFullYear())
console.log(date.getMonth())