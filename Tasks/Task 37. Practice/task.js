/*1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив 
этим значением. (используя fill)*/
console.log("Task 1");

/* fill- заполняет все элементы массива от начального до конечного индексов одним значением*/

let n = 10, value = 1;

let x = (new Array(n)).fill(value);

console.log(x);

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

let arr = a.filter(function(item) {
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
a = ["южно эфиопский грач увёл мышь за хобот на съезд ящериц"];

let arr1 = str.toLowerCase().split("").sort().join("");
let arr2 = a.sort().join("");

if (arr1 == arr2){
    console.log("предложение является панграммой");
} else {
    console.log("предложение не является панграммой");
}

//or

let alphabet = "abcdefghijklmnopqrstuvwxyz";

sentence = "Brick quiz whangs jumpy veldt fox!";

isTrue = sentence.toLowerCase().split("").filter((letter) => alphabet.includes(letter)).filter((item, index, array) => array.indexOf(item) == index).sort().join("") == alphabet; // sentence.toLowerCase().split("").filter((letter) => alphabet.includes(letter)).filter((item, index, array) => array.indexOf(item) == index).sort().join("") - это строка, которую мы сравниваем с другой строкой

console.log(isTrue);

/*8. Дано натурально число. Получить число, которое образуется из записи цифр данного
в обратном порядке.*/
console.log("Task 8");

a = [1289];
b = a.toString().split("").reverse().join("");
console.log(b);

/*9. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли 
элементы меньшие числа A, а потом большие.*/
console.log("Task 9");

b = [7, 2, 4, 5, 1];
let A = 3;

a = b.filter((item) => item < A);
c = b.filter((item) => item > A);

a = a.concat(c);

console.log(a);

/*10. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, 
но их нету в 3 массиве.*/
console.log("Task 10");

a = [1, 2, 3, 4];
b = [1, 2, 4, 5, 7];
let c = [2, 5, 7];
let result = [];

a.forEach(function (item) {
    if (b.includes(item) && !c.includes(item))
        result.push(item);
    if (!b.includes(item) && c.includes(item))
        result.push(item);
});

b.forEach(function (item) {
    if (c.includes(item) && !a.includes(item))
        result.push(item)
});

console.log(result);

//11. Дана строка.Подсчитать количество слогов в слове. 
console.log("Task 11");

let vowels = "уеыаоэяиюё";
let word = "электросоковыжималка";
let count = word.split("").filter((item) => vowels.includes(item)).length;

console.log(count);

/*12. Дана слово.Получить строку из данного слова, где 
нечетные буквы будут заглавными, а четные - строчными.*/
console.log("Task 12");
word = "электросоковыжималка";

str = word.split("").map((item, index) => (index % 2 == 0) ? item.toLowerCase() : item.toUpperCase()).join("");

console.log(str);

str = word.split("").map(function(item, index){
    if(index % 2 == 0){
        return item.toLowerCase();
    } else {
        return item.toUpperCase();
    }
}).join("");

console.log(str);

/*13. Дано полный путь к файлу(например, 
"D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt").
Вывести все названия папок, которые входят в заданный путь. */
console.log("Task 13");

let path = "D:\\ITStep\\itstep2\\Tasks\\Task 37. Practice\\task.txt";

path.split("\\").forEach(function (item, index, array) {
    if (index != 0 && index != (array.length - 1)) {
        console.log(item);
    }
});

/*14. Дана строка.Поделить строку на фрагменты по 3 символа в 
каждой.*/
console.log("Task 14");

word = "электросоковыжималка";
a = word.split("");
result = [];
a.forEach(function (item, index) {
    if (index % 3 == 0) {
        result.push(word.substring(index, index + 3));
    }
});

console.log(result);

result = [];

for (let index = 0; index < word.length; index += 3) { //index+= 3 - c шагом равным 3
    result.push(word.substring(index, index + 3)); //substring вырезает от первого параметра до второго, то есть длина равна второй параметр минус первый
}

console.log(result);
/*15. Дано слово.Проверить, является ли данное слово 
палиндромом.*/
console.log("Task 15");

word = "топот";

let inverseWord = word.split("").reverse().join("");
if (word.toLowerCase() == inverseWord.toLowerCase()) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}

//16. Дано предложение.Найти самое длинное слово в предложении.
console.log("Task 16");

str = "Аргентина манит негра";

let longWord = str.split(" ").reduce(function (word, item) {// word - самое длинное слово
    if (item.length > word.length) {
        return item;
    }
    return word;
}, "");

console.log(longWord);

/*17. Дан массив из слов.Проверить условие, что первая буква
 каждого слова равна последней букве предыдущего слова.*/
console.log("Task 17");

let words = ["Москва", "Архангельск", "Киев", "Витебск", "Киров"];

let isTrue = words.every(function (word, index, array) { //array == words, word == array[index]    
    if (index > 0) {
        if (word[0].toLowerCase() == array[index - 1].slice(-1).toLowerCase()) { //array[index - 1] - предыдущее слово, slice(-1) - последняя буква
            return true;
        }
        return false;
    }
    return true;
});

console.log(isTrue);

/*18. Дан массив чисел и число N.Вывести из данного массива 
N самых больших по значению чисел.*/
console.log("Task 18");

b = [7, 2, 4, 5, 1];
let N = 4;

a = b.sort((a, b) => a - b).splice(-4);

console.log(a);

/*19. Дано 2 предложения.Посчитать количество слов, которые
 есть в обоих предложениях.*/
console.log("Task 19");

let sentence1 = "Мама мыла раму";
let sentence2 = "Папа мыла раму";
let array1Words = sentence1.split(" ");
let array2Words = sentence2.split(" ");

count = array1Words.filter((item) => array2Words.includes(item)).length;

console.log(count);

/*20. Дана строка, состоящее из слов между которыми может 
быть больше одного пробела.Удалить все лишние пробелы,
 т.е.оставить по 1 пробелу между словами.*/
console.log("Task 20");

let sentence = "Мама    мыла    раму";

sentence = sentence.split("").filter(function (letter, i, array) {
    if (letter == " " && array[i + 1] == " ")
        return false; // не включаем текущий символ, если он равен пробелу и следующий символ тоже пробел
    return true;
}).join("");

console.log(sentence);

/*дано два массива и число К.Найти число по одному 
из каждого массива, сумма которыч равна К*/
console.log("Task 21");

a = [7, 2, 4, 5, 1];

b = [7, 2, 4, 5, 1];

K = 9;

a.forEach(function (item) {
    if (b.includes(K - item)) {
        console.log(item, K - item);
    }
});