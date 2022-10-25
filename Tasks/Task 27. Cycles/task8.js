/* Дано число. Определить, является ли оно простым 
или нет. (Должно делится только на 1 и само себя)*/

let n = 27;

for(let i = 1; i <= n; i++){

    for(let j = 2; (j <= i); j++){
        if(i % j === 0 && j < i) {
           break;
        }else if (j === i){
            console.log(i);
        }
    }  
 }

 //or

N = 18;
var isPrime = true; // булевская переменная, которая отвечает за критерий простоты числа

for (let i = 2; i < N; i++) {
    if (N % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(N, " - Простое число");
} else {
    console.log(N, " - Составное число");
}
