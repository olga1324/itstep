/*Бизнессмен взял ссуду M тысяч рублей в банке 
под 20% годовых. через сколько лет его долг
превысит S тысяч рублей, если за это время он 
не будет отдавать долг.*/

var m = 5000;
var s = 8000;
var y = 1;
var pr = 20;

for(let y = 1; m >= s; y++ ){
    s = (m + (m * pr / 100));
    

}
console.log(m, s, y);

