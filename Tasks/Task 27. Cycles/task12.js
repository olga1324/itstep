//найти сумму всех 3хзначных чисел,которые делятся на 10 и на 13

var sum = 0;
n = 999;
m = 100;

for(let i = 100; i <= n; i++ ){
    if(i % 10 == 0 && i % 13 == 0){
        sum += i;
    }
}
console.log(sum)

//2

i = 100;
sum = 0;
while(i <= 999 ){
    if(i % 10 == 0 && i % 13 == 0){
    sum += i;}
    i++; 
}  
console.log(sum)

//3

i = 100;
sum = 0;

do{
    if(i % 10 == 0 && i % 13 == 0){
    sum += i;}
    i++;
    
}while(i <= 999);
console.log(sum)