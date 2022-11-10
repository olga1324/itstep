/*3. Дан массив из n элементов. Вывести 
сумму максимального и минимального элемента.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 3");

let maxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
}

let minElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] < minElement) {
        minElement = a[i];
    }
}

console.log(maxElement + minElement);
