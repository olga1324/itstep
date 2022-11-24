/*1. Дан числовой массив.Удалить все отрицательные 
элементы в нем, а все положительные элементы 
умножить на - 1.*/
console.log("Task 1");

let a = [3, -4, 10, -21, 8, -9, 5, 17];
let b = [];


b = a.filter(function (item) {
    return item > 0;
});

console.log(b);

b = b.map(function (item) {
    return item * -1;
});

console.log(b);

/*2. Дан числовой массив.Сформировать два новых 
массива: в первом - четные элементы массива, во 
 - нечетные элементы.Сравнить суммы полученных 
 массивов(определить большую).*/
console.log("Task 2");

a = [3, -4, 10, -21, 8, -9, 5, 17];
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

/*3. Дан числовой массив.Сформировать два новых 
массива: в первом - элементы с четными индексами,
во втором - элементы с нечетными индексами.Сравнить
суммы полученных массивов(определить большую).*/
console.log("Task 3");

a = [3, 4, 10, 21, 8, 9, 5, 17];
evenIndex = [];
notEvenIndex = [];

a.forEach ((item, index) => {
    if (index % 2 === 0) {
        evenIndex.push (item)
    } else {
        notEvenIndex.push(item)
    }
}, 0)

console.log(evenIndex);
console.log(notEvenIndex);

let sumEvenIndex = 0;

evenIndex.forEach(function (item) {
    sumEvenIndex += item;
})
console.log(sumEvenIndex);

let sumNotEvenIndex = 0;

notEvenIndex.forEach(function (item) {
    sumNotEvenIndex += item;
})
console.log(sumNotEvenIndex);

if (sumEvenIndex > sumNotEvenIndex) {
    console.log("Сумма элементов с четными индексами больше суммы нечетных");
    return;
} if (sumEvenIndex < sumNotEvenIndex) {
    console.log("Сумма элементов с четными индексами меньше суммы нечетных");
    return;
} else {
    console.log("Суммы элементов с четными и нечетными индексами равны");
    return;
}

/*4. Дан числовой массив.Найти максимальный элемент
 массива.*/
console.log("Task 4");

a = [3, 4, 10, 21, 8, 9, 5, 17];

console.log("maxElement:", Math.max.apply(null, a));

/*5. Дан числовой массив.Найти разность максимального 
и мининального элемента массива.*/
console.log("Task 5");

a = [3, 4, 10, 21, 8, 9, 5, 17];

console.log("maxElement:", Math.max.apply(null, a));
console.log("minElement:", Math.min.apply(null, a));
console.log(Math.max.apply(null, a) - Math.min.apply(null, a));

/*6. Дан числовой массив и некоторое число x.
Удалить все элементы больше заданного числа x. */
console.log("Task 6");

a = [3, 4, 10, 21, 8, 9, 5, 17];
let x = 9;


a = a.filter(function (item) {
    return item < x;
});

console.log(a);