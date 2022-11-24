/*6. Дан числовой массив и некоторое число x.
Удалить все элементы больше заданного числа x. */
console.log("Task 6");

a = [3, 4, 10, 21, 8, 9, 5, 17];
let x = 9;


a = a.filter(function (item) {
    return item < x;
});

console.log(a);