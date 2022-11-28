//1. Дана строка 'js'. Сделайте из нее строку 'JS'.
console.log("Task 1");

let a = "js";

let b = a.toUpperCase();

console.log(a, b);
//2. Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log("Task 2");

a = b.toLowerCase();

console.log(b, a);
//3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
console.log("Task 3");

let c = 'я учу javascript!'

console.log(c.length);

/*4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' 
и слово 'javascript' тремя разными способами (через substr, substring, slice).*/
console.log("Task 4.1");

c = 'я учу javascript!'

//substr - Получить кусочек строки от начального символа заданной длины

let str = c.substr(2,3); 
let str2 = c.substr(6,10);

console.log(str, str2);

console.log("Task 4.2");

/* substring - Получить кусочек строки от начального символа 
до конечного (конечный не включается)*/

str = c.substring(2,5);
str2 = c.substring(6,16);

console.log(str, str2);

console.log("Task 4.3");

str = c.slice(2,5);
str2 = c.slice(6,16);

console.log(str, str2);

//5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
console.log("Task 5");

c = 'я учу javascript!';

str = c.indexOf("учу");

console.log(str);

/*6. Дана переменная str, в которой хранится какой-либо текст. 
Реализуйте обрезание длинного текста по следующему принципу: если количество символов 
этого текста больше заданного в переменной n, то в переменную result запишем 
первые n символов строки str и добавим в конец троеточие '...'. В противном случае в
переменную result запишем содержимое переменной str.*/
console.log("Task 6");

c = 'я учу javascript!';
let n = 5;
let x = c.substring(0, n);

console.log(x + "...");

//7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.
console.log("Task 7");

let d = 'Я-учу-javascript!';

while(d.indexOf("-") != -1){
    d = d.replace("-", "!");
}
console.log(d);

/*8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово
этой строки в отдельный элемент массива.*/
console.log("Task 8");

/* split - Разделение текущей строки на массив строк путём удаления 
указанной подстроки*/

c = 'я учу javascript!';

str = c.split (" ");

console.log(str); // разделение строки на массив символов

/*9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ
этой строки в отдельный элемент массива.*/
console.log("Task 9");

c = 'я учу javascript!';

str = c.split ("");

console.log(str); 

/*10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату 
в формат '31.12.2025'.*/
console.log("Task 10");

let data = '2025-12-31';

let data2 = data.split("-");
let dataRevers = data2[2] + "." + data2[1] + "." + data2[0];

console.log(dataRevers);

// or

str = '2025-12-31';

//str = str.split("-").reverse().join(".");
str = str.split("-");
str = str.reverse();
str = str.join(".");
console.log(str);

/*11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте
массив в строку 'я+учу+javascript+!'.*/
console.log("Task 11");
//join -  объудиняет все элементы массива в строкy

let k = ['я', 'учу', 'javascript', '!'];
console.log(k.join("+")); 

//12. Преобразуйте первую букву строки в верхний регистр.
console.log("Task 12");

let m = 'я учу javascript!';

m = m[0].toUpperCase() + m.slice(1);

console.log(m);

//13. Преобразуйте первую букву каждого слова строки в верхний регистр.
console.log("Task 13");

str = "Мама мыла раму";

str = str.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

console.log(str);

/*14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же,
должен работать с любыми аналогичными строками.*/
console.log("Task 14");
str = "var_test_text";

str = str.split("_").map((item, index) => {
    if (index != 0)
        return item[0].toUpperCase() + item.slice(1)
    return item;
}).join("");

console.log(str);
