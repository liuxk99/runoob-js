var carname1 = "Volvo XC60";
var carname2 = 'Volvo XC60';
console.log("compare: " + carname1 === carname2);

var character = carname1[7];
console.log("character: " + character);

var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

var a = 'It\'s alright';
var b = "He is called \"Johnny\"";
console.log(a);
console.log(b);

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(txt + ", len: " + sln);

// 字符串可以是对象
var c = "John";
var d = new String("John");
console.log(typeof c); // 返回 String
console.log(typeof d); // 返回 Object

var x = "John";
var y = new String("John");
// 结果为 false，因为 x 是字符串，y 是对象
console.log("compare: " + (x === y))
