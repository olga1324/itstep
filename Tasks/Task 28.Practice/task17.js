/*Пользователь задумал число от 1 до 100. 
Компьютер пытается его угадать (генерирует 
случайное число). После того, как компьютер
называет число, пользователь говорит меьнше, 
больше или равно загадонному. Комьютер 
соотвественно генерирует заного число, но с
учетом того, что сказал пользователь. Вывести 
все числа, которые сгенерировал компьютер перед
тем как угадать число пользваотеля (Игра Угадай).
Пример генерации случайного числа:
let randomNumber = 
Math.floor(Math.random() * (max - min + 1)) + min; 
// случаное число от min до max*/

let max = 100, min = 1;
let userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Пользователь: ${userNumber}`);
let compNumber;
do {

    compNumber = Math.floor((max + min) / 2);
    console.log(`Компьютер: ${compNumber}`);

    if (compNumber > userNumber) {
        max = compNumber;
    }

    if (compNumber < userNumber) {
        min = compNumber;
    }

} while (compNumber != userNumber);

max = 100, min = 1;
console.log("Task 17.2");
userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Пользователь: ${userNumber}`);

do {
    compNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Компьютер: ${compNumber}`);
} while (compNumber != userNumber);