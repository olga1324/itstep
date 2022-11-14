//1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generationRandom (a,n) {
    
    for(let i = 0; i < n; i++){
        a[i] = randomNumber(1,100);
    }
} 

let x = randomNumber (1,3);
let y = randomNumber (-19,10);
console.log(x,y);
let a = [];
generationRandom (a,5);
console.log (a);