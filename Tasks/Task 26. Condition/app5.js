//Дано 3 числа. Вывести среднее по значению из 3 чисел.
var a = 15, b = 11, c = 26;
if ((a > b) && (a > c) && (b > c) || (a < b) && (a < c) && (b < c)) {
    console.log ('b среднее по значению и равно', b)
} else if ((a < b) && (a > c) && (b > c) || (a > b) && (a < c) && (b < c)) {
    console.log('a среднее по значению и равно', a)
} else {
    console.log('c среднее по значению и равно', c)
}

// or
if (((b <= a) && (a <= c)) || ((c <= a) && (a <= b))) {
    console.log(a);
} else if (((a <= b) && (b <= c)) || ((c <= b) && (b <= a))) {
    console.log(b);
} else {
    console.log(c);
}