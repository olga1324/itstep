/*1. Дано число N.Получить массив квадратов чисел
 от 1 до N.*/
console.log("Task 1");

let arr = [2, 4, 8, 5];
let N = 8;

for (let i = 1; i <= N; i++){
    arr.push(i);
}

let numSquares = arr.map (function (item){
    return item ** 2;
});

console.log(numSquares);

/*2. Дан числовой массив.Что больше сумма положительных
чисел или модуль суммы отрицательных чисел. (Модуль
числа - значение числа без знака).*/
console.log("Task 2");

let a = [1, -2, -3, 4, 5, -6, 8, 9, -10,  -4];
let b = [];
let c = [];

b = a.filter(function (item) {
    return item > 0;
});

console.log(b);

let sum = 0;
b.forEach(function (item) {
    sum += item;
})
console.log(sum);

c = a.filter(function (item) {
    return item <= 0;
});

console.log(c);

let sum2 = 0;
c.forEach(function (item) {
    sum2 += Math.abs(item);
})
console.log(sum2);

if (sum == sum2) {
    console.log("суммы равны");
}
if (sum > sum2) {
    console.log("сумма положительных чисел больше суммы модулей отрицательных чисел");
} else {
    console.log("сумма положительных чисел меньше суммы модулей отрицательных чисе");
}

/*3. Дан числовой массив.Удалить все нулевые элементы 
из массива.*/
console.log("Task 3");

a = [1, 0, -3, 4, 0, -6, 8, 0, -10, 0];
let deleted = [0];

arr = a.filter(function (item) {
    return deleted.indexOf(item) == -1;
   
});

console.log(arr);

/*4. Дан числовой массив.В массиве чисел найти два 
самых больших элемента, не используя функцию sort().*/
console.log("Task 4");

a = [1, 10, -3, 4, 12, -6, 8, 0, -10, 17];
b = [];

function chooseBig(a){
let big1 = Math.max.apply(Math, a);// выбираем наибольшее значение
let index = a.indexOf(big1);// находим индекс
a.splice((index), 1); // возврвщаем наибольшее значение из массива

let big2 = Math.max.apply(Math, a);
b.push(big1, big2); // добавляем результат в новый массив
return b;
}

console.log(chooseBig(a));

/*5. Дан числовой массив.Поменять максимальный и 
минимальный элемент местами. (максимальный и минимальный
элементы не повторяются)*/
console.log("Task 5");

a = [1, 10, -33, 4, 12, -6, 8, 6, 12, 17];

let minIndex = a.indexOf(Math.min(... a));
let maxIndex = a.indexOf(Math.max(...a));
[a[minIndex], a[maxIndex]] = [a[maxIndex], a[minIndex]]
console.log(a);

/*6. Дан числовой массив.Вывести все элементы, которые 
больше предыдущего элемента.*/
console.log("Task 6");

a = [1, 10, -33, 4, 12, -6, 8, 6, 17];

/*flatMap - вызывает новый массив, каждый эл-т которого
явл результатом выполнения map c послед вызовом flat  и 
подъемом на уроdень 1*/

b = a.flatMap((item, i, arr) => item < arr[i + 1] ? arr[i + 1] : []);

console.log(b);

//or

a = [1, 10, -33, 4, 12, -6, 8, 6, 17];
b = [];

a.forEach(function (item, i){
    if (a[i] > a[i - 1])
    b.push(item);
})

console.log(b);
/*7. Дан числовой массив и 2 числа N, M, причем N < M.
Найти все элементы, которые лежат в интервале от N до M.*/
console.log("Task 7");

a = [1, 10, -33, 4, 12, -6, 8, 6, 17];

N = 6;
let M = 15;

arr = a.flat()
a.forEach((intervalEl) =>{
    if (intervalEl >= N && intervalEl <= M){
        console.log(intervalEl);
    }
})

/*8. Дано число.Получить новое число, состоящее из цифр 
данного числа, расставленных в порядке убывания.*/
console.log("Task 8");

let num = [6821459];
b = num.toString().split("").sort().reverse().join("");

console.log(b);

/*9. Дано дата в формате "день.месяц.год".Найти 
порядковый номер дня относительно начала года.*/
console.log("Task 9");

let str = '24.5.2022';

str = str.split(".").reverse().join("-");

console.log(str);

let dayOfYear = date => {
let myDate = new Date(date);
let year = myDate.getFullYear();
let firstJan = new Date (year, 0, 1);
let diff = myDate - firstJan;
return (diff / (1000 * 60 * 60 *24) + 1);
}

let result = dayOfYear(str);

console.log(result);

// or
let date = "13.09.2022";
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let year = + date.split(".")[2]; //date.split(".") = ["13", "09", "2022"], date.split(".")[2] = "2022", унарный плюс преобразует строку в число 
let month = + date.split(".")[1];
let day = + date.split(".")[0];


if ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
    months[1] = 29;
}

let days = day;
for (let i = 0; i < month - 1; i++) {
    days += months[i];
}

console.log(days);

/*10. Дан массив чисел.Найти число в массиве с наибольшим
суммой цифр.*/
console.log("Task 10");

let array = [345, 346, 4574357, 12312, 5345, 7474];

 result = array.reduce((maxNumber, item) => {

    let summDigitsOfMaxNumber = maxNumber.toString().split("").reduce((sum, element) => sum + (+ element), 0);
    let summDigitsOfItem = item.toString().split("").reduce((sum, element) => sum + (+ element), 0);

    if (summDigitsOfItem > summDigitsOfMaxNumber) {
        return item;
    }
    return maxNumber;
});

console.log(result);

//11. Дано предложение.Найти длину самого короткого слова.
console.log("Task 11");

c = "Дан массив чисел";

function shortWord(c){
    return c.split (" ").sort(function(a, b){
        return a.length - b.length;
    }).shift()
}

console.log(shortWord(c).length);

/*12. Даны 2 слова.Удалить из обоих слов буквы, которые
 встречаются в обоих словах.*/
console.log("Task 12");

str = "капакабана, капибара";

let uniqueLetters = str.toLowerCase().split("").filter(function (item, index) {
    return str.toLowerCase().indexOf(item) == index; // совпадение индекса искомого элемента будет совпадать с индексом поиска только для первого вхождения
}).join("");

console.log(uniqueLetters);

//or

let firstWord = "Мама";
let secondWord = "Папа";

let firstWordNew = firstWord.toLowerCase().split("").filter(function (item) {
    return !secondWord.includes(item);
}).join("");

let secondWordNew = secondWord.toLowerCase().split("").filter(function (item) {
    return !firstWord.includes(item);
}).join("");

console.log(firstWordNew, secondWordNew);

/*13. Дано предложение.Вывести слова в предложение в 
порядке убывания.*/
console.log("Task 13");

str = "Вывести слова в предложение в порядке убывания";

//arr = str.split("").sort((a, b) => b.length - a.length).join("");

console.log(arr);

/*14. Дано предложение.Вывести частоту встречаемости
 каждого символа в строке.*/
console.log("Task 14");

str = "мама мыла раму";

function count (str) {
    let count = {};
    str.split('').forEach(function(s){
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
    
console.log(count(str));

//or
str = "Аргентина манит негра";

let unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);
let uniqueCount = [];

unique.forEach(function (item, index, array) {
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    uniqueCount[index] = count;
});

unique.forEach((item, index) => console.log(item, "->", uniqueCount[index]));

// или
str = "Аргентина манит негра";

unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);

unique.forEach(function (item, index, array) {
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    console.log(item, "->", count);
});

    
/*15. Дано слова.Получить 2 новые строки, где 1 строка 
состоит из гласных букв слова в верхнем регистре, а 
вторая строка - из согласных в нижним регистре.*/
console.log("Task 15");

str = "кападакия";

b = [];
c = [];
a = str.split("");
for (let i = 0; i < a.length; i++){
    if (a[i] == 'а' || a[i] == 'о' || a[i] == 'у' || a[i] == 'э' || a[i] == 'ы' || a[i] == 'ё' || a[i] == 'я' || a[i] == 'и' || a[i] == 'ю' || a[i] == 'е' ){
        b.push(a[i]);
    } else {
        c.push(a[i]);
    }
}

console.log(b, c);

/*16. Дана строка.Подсчитать количество цифр встречающихся
 в строке.*/
console.log("Task 16");

str = "liwe87nkd45lj123";

num = 0;
for(let i = 0; i < str.length; i++){
    let element = str [i];
    if (isFinite(element)){
        num++
    }
}
/* isFinite - определяет, являетя ли значение числом и возвр. логическое значение. 
true/ false*/

console.log(num);
/*17. Дана строка.Вывести символы, которые в ней
 повторяются.*/
console.log("Task 17");

str = "мама мыла раму";
str2 = str.toLowerCase().split("");
let dublicat = str2.filter((item, index, array) => {
    return array.indexOf(item) != index;
});

console.log(dublicat);
/*18. Дан числовой массив.Заменить каждый элемент массива
 с нечетным индексом на ноль.*/
console.log("Task 18");

a = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 1; i < a.length; i++){
    if (i % 2 == 1){
        a[i] = 0;
    }
}

console.log(a);

//or

console.log("Task 18");

a = [1, 2, 3, 4, 5, 6, 7];

a = a.map(function (item, index) {
    if (index % 2 == 1) {
        return 0;
    }
    return item;
})
console.log(a);

/*19. Дан числовой массив.Преобразовать массив так, 
чтобы сначала шли нулевые элементы, а затем все остальные.*/
console.log("Task 19");

a = [ 1, 0, 2, 4, 0, 6, 0];

function Zero (a) {
    let result = a.filter(el => el !== 0);
    return result.concat(new Array(a.length - result.length).fill(0))
}

console.log(Zero([1, 0, 2, 4, 0, 6, 0]).reverse());
/*20. Дан числовой массив.Найдите наименьший четный 
элемент массива.Если такого нет, то выведите первый
 элемент.*/
console.log("Task 20");

arr = [1, 5, 2, 4, 7, 6, 10];

let min = Math.min.apply(Math, arr.filter(function(n){
    return n % 2 == 0;
}))

console.log(min);

