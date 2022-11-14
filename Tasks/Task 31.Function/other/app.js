function deleteElementFromArrayByIndex(a, index){
    for(let i = index; i < a.length - 1; i++){
        a[i] = a[i+1];
    }
    a.length--;
}

function fillRandomArray(a, n){ // a = b, n = 10
    // a - глобальной переменной
    // n - локальная внутри функции
    let min = 1, max = 100;
    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    n = 9;
}


let b = [];
let x = 10;
let c = b;
fillRandomArray(b, x);
console.log(b, x);
console.log(c);
fillRandomArray(b, 10);
console.log(b);

deleteElementFromArrayByIndex(b,0);
console.log(b,c);

