/*4. Дан массив из n элементов. Поменять
максимальный и минимальный элементы местами.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 4");

let maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}

let minIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] < a[minIndex]) {
        minIndex = i;
    }
}
console.log(a);
let temp;

temp = a[maxIndex];
a[maxIndex] = a[minIndex];
a[minIndex] = temp;

console.log(a);

