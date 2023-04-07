// num1为全局变量，num2为window的一个属性
var num1 = 1;
num2 = 2;
// delete num1;  无法删除
// delete num2;  删除

function foo() {
  console.log('=> foo()');
  var num1 = 3; // 本地变量
  num2 = 4; // window的属性
  // 匿名函数
  console.log('num1: ' + num1);
  console.log('num2: ' + num2);
  (function () {
    console.log('=> Anoymous function()');

    var num1 = 5; // 本地变量
    num2 = 6; // 继承作用域（闭包）
    num3 = 7; // window的属性
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    console.log('num3: ' + num3);

    console.log("<- Anoymous function()");
  })();

  console.log('num1: ' + num1);
  console.log('num2: ' + num2);
  console.log('num3: ' + num3);
}

console.log("=> main()");
console.log('num1: ' + num1);
console.log('num2: ' + num2);

foo();

console.log("<- main()");
console.log('num1: ' + num1);
console.log('num2: ' + num2);
