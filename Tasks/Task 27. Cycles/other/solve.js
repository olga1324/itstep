console.log("Task 1");

var i = 1;

while(i < 11){
    console.log(i);

    i++;
}


console.log("Task 2");

for(let k = 20; k >= 11; k--){
    console.log(k);
}

i = 20;

while(i >= 11){
    console.log(i);
    i--;
}

console.log("Task 3");

i = 1;

while(i <= 10){
    console.log(`4 x ${i} = ${4*i}`);
    i++;
}

for(let i = 1; i <= 10; i++){
    console.log(`4 x ${i} = ${4*i}`);
}

console.log("Task 4");

var s = 0;
i = 1;
var N = 1000;

while(i <= N){

    if(i % 2 == 0){
        s+= i;
    }

    i++;
}
console.log(s);

s = 0;
for(let i = 1; i <= N; i++){
    if(i % 2 == 0){
        s+= i;
    }
}
console.log(s);

console.log("Task 5");

for(let i = 20; i <= 50; i++){
    if((i % 3 == 0) && (i % 5 != 0)){
        console.log(i);
    }
}

console.log("Task 6");

N = 100;
s = 0;

for(let i = 1; i <= N; i++){
    s += i**2;
}

console.log(s);

console.log("Task 7");

var p = 1; //начальное произведение
var m = 1;
//(1+2)*(1+2+3)*...*(1+2+...+10) == 1*(1+2)*(1+2+3)*...*(1+2+...+10)
for(let i = 1; i <= 10; i++){ // 10 итераций

    p *= m;
    m += i+1;

}
console.log(p);

console.log("Task 8");

N = 18;
var isPrime = true; // булевская переменная, которая отвечает за критерий простоты числа

for(let i = 2; i < N; i++){
    if(N % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(N, " - Простое число");
} else {
    console.log(N, " - Составное число");
}

console.log("Task 9");

var M = 1000;
var S = 100000;
var years = 0;

do{

    M *= 1.2;
    years++;

}while(M <= S);

console.log(years);

console.log("Task 10");

M = 1000;
var price = 13;
var iceCream = 0;

while(price <= M){
    M -= price;
    iceCream++;
}

console.log(M, iceCream);

console.log("Task 11");

var prevprev = 1, // предпредыдущее
    prev = 1, // предыдущее
    current; //текущее число
N = 15; // номер числа Фибоначчи

for(let i = 3; i <= N; i++){ // начинаем считать с 3 номера последовательности

    current = prev + prevprev; // расчет текущего числа с номером i

    prevprev = prev;
    prev = current;

}

console.log(current);

console.log("Task 12.1");

s = 0;

for(let i = 100; i <=999; i++){
    if((i % 10 == 0) && (i % 13 == 0)){
        s += i;
    }
}
console.log(s);

console.log("Task 12.2");
s = 0;
i = 100;

while(i <=999){
    if((i % 10 == 0) && (i % 13 == 0)){
        s += i;
    }    

    i++;
}

console.log(s);

console.log("Task 12.3");
s = 0;
i = 100;

do{
    if((i % 10 == 0) && (i % 13 == 0)){
        s += i;
    }    

    i++;
}while(i <=999);

console.log(s);

console.log("Task 13");

N = 123456789;
var count = 0;
var isPrime;

for(let i = 1; i <= N; i++){
    if(N % i == 0){
       count++;
    }
}

console.log(count);

console.log("Task 14");

N = 12;
count = 0;
var isPrime;

for(let i = 2; i <= N; i++){
    if(N % i == 0){
        isPrime = true; // булевская переменная, которая отвечает за критерий простоты числа

        for(let j = 2; j < i; j++){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            count++;
        } 
        
    }
}

console.log(count);