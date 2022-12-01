//2. Вывести последнее слово в предложении.
console.log("Task 2");

let str = 'Вывести последнее слово в предложении';

console.log(str.split(" ").splice(-1));

//or

console.log("Task 2");

str = "Мама мыла раму";

let lastWord = str.split(" ").pop();
console.log(lastWord);

lastWord = str.substring(str.lastIndexOf(" ")+1); // str.lastIndexOf(" ") - позиция последнего пробела в строке
console.log(lastWord);

