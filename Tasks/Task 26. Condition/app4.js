//Дано 3 числа. Вывести максимальное из 3 чисел.
var a = 23, b = 19, c = 15;
if ((a > b) && (a > c)) {
    console.log('a больше b и c, и равно', a)
} else if ((a < b) && (b > c)) {
    console.log('b больше a и c, и равно', b)
} else if ((a < b) && (b < c)) {
    console.log('c больше a и b, и равно', c)
} else {
    console.log('a, b и c, и равны')
}

// or
var a = 2, b = 2, c = 2;
if ((a >= b) && (a >= c)) {
    console.log(a);
} else if ((b >= a) && (b >= c)) {
    console.log(b);
} else {
    console.log(c);
}