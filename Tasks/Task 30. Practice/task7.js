/*7. Дан массив из n элементов и некоторое
 число x. Проверить наличие числа x в 
 массиве.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 7");

let x = 52;
let isFind = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
        isFind = true;
        break;
    }
}

console.log(a);
if (isFind) { // isFind == true
    console.log(`${x} найдено`);
} else {
    console.log(`${x} не найдено`);
}