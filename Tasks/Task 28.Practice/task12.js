/*Найти сумму первых 20 натуральных чисел 
кратных 5.*/

var n = 0,
    sum = 0,
    i = 0;

while (n != 21 ){
    i++;
    if ( i % 5 == 0){
        sum+= i,
        n++;
    }  
}
console.log(sum);