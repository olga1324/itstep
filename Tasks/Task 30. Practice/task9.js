/*9. Дан массив из n элементов. Проверить,
упорядочен ли массив по возрастанию или 
убыванию.*/

let a = [];
const min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 9.1");

countAsc = 0;
countDesc = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[i - 1]) {
        countAsc++;
    }
    if (a[i] < a[i - 1]) {
        countDesc++;
    }
}
if (countAsc == a.length - 1) {
    console.log("Массив упорядочен по возрастанию");
} else if (countDesc == a.length - 1) {
    console.log("Массив упорядочен по убыванию");
} else {
    console.log("Массив не упорядочен");
}

console.log("Task 9.2");

let isAsc = true, isDesc = true; // предполагаем, что по-умолчанию массив упорядочен по возрастанию и убыванию

for (let i = 1; i < a.length; i++) {
    if (a[i] < a[i - 1]) { // не упорядочен по возрастанию
        isAsc = false;
    }
    if (a[i] > a[i - 1]) { // не упорядочен по убыванию
        isDesc = false;
    }
}

if (isAsc && isDesc) {
    console.log("Массив состоит из одинаковых элементов");
} else if (isAsc) {
    console.log("Массив упорядочен по возрастанию");
} else if (isDesc) {
    console.log("Массив упорядочен по убыванию");
} else {
    console.log("Массив не упорядочен");
}