/*8. Дан массив из n элементов и число k<n.
 Удалить элемент с номером k и сдвинуть на
одну позицию влево все элементы, следующие 
за ним.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 8");
console.log(a);
k = 5;
for (let i = k; i < a.length - 1; i++) {
    a[i] = a[i + 1];
}
a.length--; // уменьшаем - плохая практика
console.log(a);
