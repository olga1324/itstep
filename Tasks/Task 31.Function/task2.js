//2. Разработать функцию для заполнения массива случаныйми числами.

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generationRandom (a,n) {
    
    for(let i = 0; i < n; i++){
        a[i] = randomNumber(1,100);
    }
} 

let a = [];

generationRandom (a,5);
console.log (a);