/*6. Удалить из предложения все знаки препинания
 (. , : ; ! ? -).*/
console.log("Task 6");

let deletedLetters = ".,:;!?-";
str = "Мама, мыла раму?";

let newStr = str.split("").filter(function(item){
    return deletedLetters.indexOf(item) == -1; // выбираем только те символы, которые не входят в deletedLetters
}).join("");

console.log(newStr);
