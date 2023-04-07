console.log("=> 1");
var a = 1;
console.log(a);

var a = 'x';
console.log(a);

console.log("=> 2");
function test() {
    console.log("test");
}
test();     //输出 "test arg0 + undefined"

function test(arg1) {
    console.log("test arg(len:" + arguments.length + ") + " + arg1);
}
test(1, 2);  //输出 "test arg2 + 1"

// console.log("=> 3");
// function test(arg1) {
//     for(var i=0; i<arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
// test(1,2); //输出 1 2

console.log("=> 4");
var a = 100;
function a() {
    return "function";
}
console.log(a);     //输出 100
// console.log(a());
/*
报错
Uncaught TypeError: a is not a function
    (anonymous function) @test.html:9
*/

console.log("=> 5");
var a = 100;
var a = function () {
    return "function";
}
console.log(a);
/* 
输出
function() {
    return "function";
}
*/
console.log(a());   //输出 "function"
