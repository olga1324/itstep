/*1. Дан массив из n элементов и число k<n.
 Вывести последние k элементов массива.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 1");
let k = 3;
for (let i = a.length - k; i < a.length; i++) {
    console.log(a[i]);
}