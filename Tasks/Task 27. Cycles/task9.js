/*Бизнессмен взял ссуду M тысяч рублей в банке 
под 20% годовых. через сколько лет его долг
превысит S тысяч рублей, если за это время он 
не будет отдавать долг.*/

var M = 1000;
var S = 100000;
var years = 0;

do {

    M *= 1.2;
    years++;

} while (M <= S);

console.log(years);
