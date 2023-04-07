//定义常量a并赋值为0
const a = 0;

//报错（不能重新赋值）
// TypeError: Assignment to constant variable.
a = 1;

//报错（不能重新声明）
// SyntaxError: Identifier 'a' has already been declared
const a = 2;

//输出0
console.log("a is: " + a);