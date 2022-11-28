/*2. Дан числовой массив.Сформировать два новых 
массива: в первом - четные элементы массива, во 
 - нечетные элементы.Сравнить суммы полученных 
 массивов(определить большую).*/
console.log("Task 2");

a = [3, -4, 10, -21, 28, -9, 5, 17];
let even = [];
let notEven = [];


even = a.filter(function (item) {
    return item % 2 == 0;
});

console.log(even);

notEven = a.filter(function (item) {
    return item % 2 == 1;
});

console.log(notEven);

let sumEven = 0;

even.forEach(function (item) {
    sumEven += item;
})
console.log(sumEven);

let sumNotEven = 0;

notEven.forEach(function (item) {
    sumNotEven += item;
})
console.log(sumNotEven);

if (sumEven > sumNotEven) {
    console.log("Сумма  четных элементов больше суммы нечетных");
    return;
} if (sumEven < sumNotEven) {
    console.log("Сумма четных элементов меньше суммы нечетных");
    return;
} else {
    console.log("Суммы четных  и нечетных элементов  равны");
    return;
}

//or

console.log("Task 2:");
a = [2, -1, 0, 1, -2, 4];

let b = a.filter((item) => item % 2 == 0).reduce((sum, item) => sum + item, 0);
let c = a.filter((item) => item % 2 == 1).reduce((sum, item) => sum + item, 0);

let max = Math.max(b, c);
console.log(max);