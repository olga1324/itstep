/*6. Дан числовой массив и некоторое число x.
Удалить все элементы больше заданного числа x. */
console.log("Task 6");

a = [3, 4, 10, 21, 8, 9, 5, 17];
let x = 9;


a = a.filter(function (item) {
    return item < x;
});

console.log(a);

//or

console.log("Task 6:");
a = [2, -1, 0, 1, -2, 4];
let x = 0;
a = a.filter((item) => item <= x);

console.log(a);