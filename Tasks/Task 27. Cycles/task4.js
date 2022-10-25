/*Дано число N. Найти сумму всех четных чисел 
от 1 и не превосходящих N.*/

var s = 0;
i = 1;
N = 1000;

while(i <= N ){

    if(i % 2 == 0){
        s+= i;
    }

    i++;
}
console.log(s);

//or 
s = 0;
for(let i = 1; i <= N; i++){
    if(i % 2 == 0){
        s+= i;
    }
}
console.log(s);
