function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillRandomArray(a, n){
    for(let i = 0; i < n; i++){
        a[i] = randomNumber(1, 3);
    }
}

let x = randomNumber(1,3);
let y = randomNumber(-19,10);
console.log(x, y);
let a = [];
fillRandomArray(a, 5);
console.log(a);