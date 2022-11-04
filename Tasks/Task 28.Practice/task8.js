/*Дан день, месяц и год (3 числа). Определить, 
является ли дата корректной.*/

var day = 30,
    month = 2,
    year = 2012;

if (((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day <= 31) && (year >= 1)) || ((month == 4 || month == 6 || month == 9 || month == 11) && (day <= 30) && (year >= 1)) || (day <= 29) && ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) && (year >= 1) || ((month == 2) && (day <= 28) && (year >= 1))){
    console.log("Дата корректная");
} else {
    console.log("Дата некорректная");
}

// or
let day = 32, month = 2, year = 2000;

if (month < 1 || month > 12) {
    console.log(`Дата некорректна`);
} else if (year < 0) {
    console.log(`Дата некорректна`);
} else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day >= 1 && day <= 31)) {
    console.log(`Дата корректна`);
} else if ((month == 4 || month == 6 || month == 9 || month == 11) && (day >= 1 && day <= 30)) {
    console.log(`Дата корректна`);
} else if ((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) && (day >= 1 && day <= 29)) {
    console.log(`Дата корректна`);
} else if (day >= 1 && day <= 28) {
    console.log(`Дата корректна`);
} else {
    console.log(`Дата некорректна`);
}