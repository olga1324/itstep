/*5. Дано предложение. Проверить, есть ли в этом
 предложение заданное слово.*/
console.log("Task 5");

let str = "есть ли в этом предложение заданное слово";

console.log(str.includes("слово"));

//or

console.log("Task 5");
str = "Мама мыла раму";
let findWord = "Мама";

let isFind = str.toLowerCase().split(" ").includes(findWord.toLowerCase());

console.log(isFind);
