console.log("Task 4");
var a = 2, b = 2 , c = 2;
if((a >= b) && (a >= c)){
    console.log(a);
}else if((b >= a) && (b >= c)){
    console.log(b);
}else{
    console.log(c);
}

console.log("Task 5");
if(((b <= a) && (a <= c)) || ((c <= a) && (a <= b))){
    console.log(a);
} else if(((a <= b) && (b <= c)) || ((c <= b) && (b <= a))){
    console.log(b);
} else {
    console.log(c);
}

console.log("Task 6");

var x = 3, y = 4, z = 5;
if((x < y + z) && (y < x + z) && (z < x + y)){
    console.log("Треугольник");
} else {
    console.log("Не треугольник");
}

console.log("Task 7");

x = 2, y = 3;
var r = 4;
if((x*x + y*y) < r*r){
    console.log("in circle");
} else {
    console.log("out off circle");
}

console.log("Task 8");

var year = 2100;

if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log(`Год ${year} - високосный, 366 дней`);
} else {
    console.log(`Год ${year} - невисокосный, 365 дней`);
}

console.log("Task 9");

var day = 3, hour = 17, minutes = 1;

if((day > 0 && day < 6) && ((hour >= 8 && hour <= 16) || (hour == 17 && minutes == 0))){
    console.log("work time");
} else {
    console.log("resting time");
}

console.log("Task 10");

var mushrooms = 1523;
if(mushrooms % 10 == 1 && mushrooms % 100 != 11){
    console.log(`${mushrooms} гриб`);
} else if((mushrooms % 10 >= 2 && mushrooms % 10 <= 4) && (mushrooms % 100 < 12 || mushrooms % 100 > 14)){ // или !(mushrooms % 100 >= 12 && mushrooms % 100 <= 14)
    console.log(`${mushrooms} гриба`);
} else {
    console.log(`${mushrooms} грибов`);
}

console.log("Task 11");

//ax*x + bx + c = 0, D = b*b - 4ac
a = 9, b = 12, c = 4;

var D = b*b - 4 * a * c; // дискриминант

if(D > 0){ // будет 2 корня
    console.log((-b-D**0.5)/(2*a), (-b+D**0.5)/(2*a));
} else if(D == 0){ // 1 корень
    console.log(`корень - ${(-b)/(2*a)}`);
} else {
    console.log("нет корней");
}

console.log("Task 12");

a = 1, b = 1;

if(a != 0){
    console.log(b/a);
} else if(a == 0 && b == 0){
    console.log("x - любое");
} else {
    console.log("нет корней")
}