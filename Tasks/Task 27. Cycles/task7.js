//. Вычислить: (1+2)*(1+2+3)*...*(1+2+...+10).

var sum = 1;
var j = 1; //ответ, произведение
var i = 2;

while(i < 11){
    sum += i; 
    j *= sum; 
    i++;  //увелич номер итерации на +1
}
console.log(j)

//or

var p = 1; //начальное произведение
var m = 1;
//(1+2)*(1+2+3)*...*(1+2+...+10) == 1*(1+2)*(1+2+3)*...*(1+2+...+10)
for (let i = 1; i <= 10; i++) { // 10 итераций

    p *= m;
    m += i + 1;

}
