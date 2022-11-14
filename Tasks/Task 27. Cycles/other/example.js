var s = 0, i = 1, n = 10;

//while

while(i <= n){
    s += i;

    i++;
}

console.log(s,i);

//do while
s = 0, i = 1, n = 10;
do{
    s+= i;

    i++;

}while(i <= n);
console.log(s,i);

//for

n = 10;
var k;
for (s =0,k = 1; k <= n; k++){
    s+= k;
    
}
console.log(s,i,k);
s = 0;
for(let k = 1; k <= n; ){
    s+= k;
    k++;
}

console.log(s,i);

s = 0; i = 1; n = 10;
for(;;){
    s+= i;
    i++;
    if(n > 10)
        break;
}

//
// сумма первых 100 чисел делящихся на 3

s = 0; // сумма 
n = 1; // переменная для просмотра всех чисел начиная с 1
i = 0; // количество сложенных чисел

while(i <= 100){

    if(n % 3 == 0){
        s += n;
        i++;
    } else {
        
    }

    n++;
}