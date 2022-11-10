/*2. Дан массив из n элементов и число k.
 Вывести все элементы кратные числу k.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 2");

k = 4;
for (let i = 0; i < a.length; i++) {
    if (a[i] % k == 0) {
        console.log(a[i]);
    }
}