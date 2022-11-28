/*1. Дан числовой массив.Удалить все отрицательные 
элементы в нем, а все положительные элементы 
умножить на - 1.*/
console.log("Task 1");

let a = [3, -4, 10, -21, 8, -9, 5, 17];
let b = [];


b = a.filter(function (item) {
    return item > 0;
});

console.log(b);

b = b.map(function (item) {
    return item * -1;
});

console.log(b);

//or

console.log("Task 1:");
 a = [2, -1, 0, 1, -2, 4];

a = a.filter((item) => item >= 0);
a = a.map((item) => -item);

console.log(a);
