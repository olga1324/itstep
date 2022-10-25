//. Вычислить: (1+2)*(1+2+3)*...*(1+2+...+10).

var sum = 1;
var j = 1; //ответ
var i = 2;

while(i < 11){
    sum += i; 
    j *= sum; 
    i++;
}
console.log(j)
