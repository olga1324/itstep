//периметр
var a = 5;
var p = (a * 4);
console.log(p);

//площадь круга
var r = 3;
const Pi = 3.14159;
console.log(r**2 * Pi);

//гипотенуза
var a, b, c;
a = 3;
b = 4;
c = a**2 + b**2;
var hypotenuse = c**0.5;
console.log(hypotenuse);

//меняем значения переменных
var a = 5;
var b = 7;
var c = a + b;
var a = c - a;
var b = c - b;
console.log(a, b);

//сумма цифр
var number = 123;
var a = number % 10;
console.log(a);
var b = ((number % 100) - a) / 10;
console.log(b);
var c = (number - (b * 10) - a) / 100;
console.log(c);
var sum = a + b + c;
console.log(sum);

//число в обратном порядке
