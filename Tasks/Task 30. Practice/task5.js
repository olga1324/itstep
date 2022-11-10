/*5. Дан массив из n элементов. Создать 2 
новых массива. В 1 первый записать все 
элементы с четными индексами, во 2 - с 
нечетными.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 5.1");

let b = [], c = [];
let j = 0, q = 0;

for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
        b[j] = a[i];
        j++;
    } else {
        c[q] = a[i];
        q++;
    }
}
console.log(a);
console.log(b);
console.log(c);

console.log("Task 5.2");
b = [], c = [];
j = 0, q = 0;

for (let i = 0; i < a.length; i += 2, j++) {
    b[j] = a[i];
}

for (let i = 1; i < a.length; i += 2, q++) {
    c[q] = a[i];
}

console.log(a);
console.log(b);
console.log(c);