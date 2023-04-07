var a = 1;
var a = 2;
console.log(a); // 输出结果：2

var b = 1;
var b = function () {
}
console.log(b); //输出结果： a 函数

// 声明函数
var f = function () {
    console.log("有var")
}
// 未声明函数
function f() {
}
console.log(f); // 输出结果： 有var的f函数
console.log(f());

console.log("=> c");
var c = 1; // 赋值
var c; // 未赋值
console.log(c); // 输出结果： 1

console.log("=> d");
var d = 1; // 声明赋值
d = 2; // 未声明变量
// 输出结果： 2 
console.log(d);

console.log("=> g");
// 声明赋值
var g = function () {
}
// 未声明变量
g = function () {
    console.log("赋值")
}
// 输出结果：function () {console.log("赋值")}
console.log(g);
console.log(g());
