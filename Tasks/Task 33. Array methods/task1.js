//1. дан массив. Найти сумму положительных эл-тов, возведенных в квадрат

console.log("Task 1");
let a = [9, -14, 0, 1, 4, 9];
let b = [];


b = a.filter(function(item){
    return item > 0;
});

b = b.map(function(item){
    return item ** 2;
});

console.log(b);

let sum = 0;
b.forEach(function(item){
    sum += item;
})
console.log(sum);

//or

sum = a.filter((item) => item > 0)
        .map((item) => item **2 )
        .reduce((sum, item) => sum + item, 0);

console.log(sum);

// 2. [1, 3, 4, 6, 2, 2, 1, 3] => [1, 3, 4, 6, 2] - удалить повторы
// includes - проверяет наличие. true / false
/* indexOf - находит индекс элемента в массиве, возвращает первый индекс, 
по которому данный элемент может быть найден в массиве*/

console.log("Task 2");

a = [1, 3, 4, 6, 2, 2, 1, 3];
console.log(a);

let unique = [];
// 1- includes
a.forEach(function (item) {
    if (!unique.includes(item))
        unique.push(item);
})

console.log(unique);
// 2 - indexOf
unique = a.filter(function (item, i) {
    return a.indexOf(item) == i;
})

console.log(unique);
