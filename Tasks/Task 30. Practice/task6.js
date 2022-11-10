/*6. Дан массив из n элементов. Увелить 
все нечетные элементы на 1 и уменьшить все
 четные в 2 раза.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 6");

console.log(a);
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        a[i] = a[i] / 2;
    } else {
        a[i]++;
    }
}
console.log(a);