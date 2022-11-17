/*3. Сделайте функцию, которая принимает параметром 
число от 1 до 7, а возвращает день недели на 
русском языке.*/

let day = 7;

function dayWeek(day) {
    if (day == 1) {
        console.log("Понеделььник");
    } else if (day == 2) {
        console.log("Вторник");
    } else if (day == 3) {
        console.log("Среда");
    } else if (day == 4) {
        console.log("Четверг");
    } else if (day == 5) {
        console.log("Пятница");
    } else if (day == 6) {
        console.log("Суббота");
    } else if (day == 7) {
        console.log("Воскресенье");
    } 
    return day;
}

console.log(dayWeek(day));