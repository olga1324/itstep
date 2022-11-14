//let a = b = c = 1;
//console.log(`${a}, ${b}, ${c}`);
console.log("Task 4");

//100101102...198199

let k = 299;

if(k % 3 == 1){ // k = 1, 4, 7, 10, 13, .., 298
    console.log(1); // количество сотен в трехзначных числах
}

if(k % 3 == 2){ // k = 2, 5, 8, 11, 14, ..., 299
    console.log(Math.floor(k/30)); // количество дестятков в трехзначном числе Math.floor() - целая часть от числа 
}

if(k % 3 == 0){ // k = 3, 6, 9, 12, ..., 300
    let a = k / 3;

    if(a % 10  != 0){
        console.log(a % 10 - 1);
    } else {
        console.log(9);
    }
}

console.log("Task 8");

let day = 32, month = 2, year = 2000;

if( month < 1 || month > 12){
    console.log(`Дата некорректна`);
} else if( year < 0){
    console.log(`Дата некорректна`);
} else if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day >= 1 && day <= 31)){
    console.log(`Дата корректна`);
} else if((month == 4 || month == 6 || month == 9 || month == 11) && (day >= 1 && day <= 30)){
    console.log(`Дата корректна`);
} else if((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) && (day >= 1 && day <= 29)){
    console.log(`Дата корректна`);
} else if(day >= 1 && day <= 28){
    console.log(`Дата корректна`);
} else {
    console.log(`Дата некорректна`); 
}

console.log("Task 10");

let x1 = 1, y1 = 2, r1 = 3, x2 = -1, y2 = 2, r2 = 3;

let d = ((x2-x1)**2 + (y2-y1)**2)**0.5;

if(d > r1 + r2){
    console.log("Не пересекаются и не лежат друг в друге");
} else if(d == r1 + r2){
    console.log("Внешнее качание");
} else if (d < Math.abs(r2-r1)){ // Math.abs - модуль числа (число без знака)
    console.log("Не пересекаются и лежат друг в друге")
} else if((d == Math.abs(r2-r1))){
    console.log("Внутреннее касание");
}else{
    console.log("Пересекаются в 2 точках");
}

console.log("Task 14");
let N = 10, m = 2;
let mInMinutes = m * 60;
let sum = 0;
for(let i = 1; i <= N; i++){
    sum += mInMinutes;
    mInMinutes += 10;
}

console.log(sum/ 60);

console.log("Task 16");

let c = 10, b = 6;

let counter = 0;

while( c != b){
    if(c > b){
        c = c - b;
    } else {
        b = b - c;
    }
    counter++;
}

console.log(counter);

console.log("Task 17.1");
let max = 100, min = 1;
let userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Пользователь: ${userNumber}`);
let compNumber;
do{

    compNumber = Math.floor((max+min)/2);
    console.log(`Компьютер: ${compNumber}`);

    if(compNumber > userNumber){
        max = compNumber;
    }

    if(compNumber < userNumber){
        min = compNumber;
    }
    
} while(compNumber != userNumber);

max = 100, min = 1;
console.log("Task 17.2");
userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Пользователь: ${userNumber}`);

do{
    compNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Компьютер: ${compNumber}`);
}while(compNumber != userNumber);