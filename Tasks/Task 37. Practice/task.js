/*1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив 
этим значением. (используя fill)*/
console.log("Task 1");

/* fill- заполняет все элементы массива от начального до конечного индексов одним значением*/

let length = 3;
let arr = Array(length).fill (14);

console.log(arr);

//2. Найти сумму только положительных элементов массива.
console.log("Task 2");

let a = [9, -14, 0, -1, 4, 7];
let b = [];


b = a.filter(function(item){
    return item > 0;
});

console.log(b);

let sum = 0;
b.forEach(function(item){
    sum += item;
})
console.log(sum);

/*3. Слить 3 массива и вывести на экран элементы полученного массива в порядке 
убывания значений.*/
console.log("Task 3");

a = [ 1, 4, 6];
b = [5, 8, 7];
c = [ 10, 13, 23];

let d = a.concat(b, c).sort((a, b) => b - a);
console.log(d);

//4. Проверить 2 массива на полное совпадение.
console.log("Task 4");

a = [ 1, 4, 6];
b = [ 1, 4, 6, 8];

if (a.length == b.length) { 
    let isEqual = a.every(function (item, index) {
        return a[index] == b[index]; // item == a[index]
    });
    if (isEqual) {
        console.log("совпадает");
    } else {
        console.log("не совпадает");
    }
} else {
    console.log("не совпадает");
}

/*5. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3].
Должно работать для любых 2 аналогичных массивов.*/
console.log("Task 5");

a = [1,3,6,4,3,3,5,6];
let deleted = [1, 3];

arr = a.filter(function(item) {
    return deleted.indexOf(item) == -1; 
    // совпадение индекса искомого элемента будет совпадать с индексом поиска только для первого вхождения
});

console.log(arr);

/*6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего
арифметического значения всех элементов массива.*/
console.log("Task 6");

a = [1, 3, 6, 4, 3, 3, 5, 6];

let aritmeticalMean = a.reduce(function(sum, item){
    return sum + item;
}) / a.length;

console.log(aritmeticalMean);

b = a.filter(function(item){
    return item > aritmeticalMean;
});

console.log(b);

//7. Дано предложение на русском языке. Определить, является ли оно панграммой.
console.log("Task 7");

let str = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
a = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л",
"м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ",
    "ь", "ы", "ъ", "э", "ю", "я"];

let arr1 = str.toLowerCase().split("").sort().join("");
let arr2 = a.sort().join("");

if (arr1 == arr2){
    console.log("предложение является панграммой");
} else {
    console.log("предложение не является панграммой");
}

/*8. Дано натурально число. Получить число, которое образуется из записи цифр данного
в обратном порядке.*/
console.log("Task 8");

a = [1289];
b = a.toString().split("").reverse().join("");
console.log(b);

/*9. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли 
элементы меньшие числа A, а потом большие.*/
console.log("Task 9");

a = [1, 3, 6, 4, 11, 16, 5, 2];
let x = 4;

arr1 = a.filter((item) => item <= x).sort((a, b) => a - b);
arr2 = a.filter((item) => item > x).sort((a, b) => a - b);

console.log(arr1, arr2);

let arr3 = arr1.concat(arr2);

console.log(arr3);

/*10. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, 
но их нету в 3 массиве.*/