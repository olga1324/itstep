function summa(a, b){
    let x = a + b;
    return x;
}

function div(a, b){
    return a / b;
}

let y = summa(2, 3) + div(4, 1);
console.log(y);
console.log(div(6, 3));

let x = summa( div (2, 1), summa(0,3)); // div (2,1) = 2, summa (0,3) = 3, summa (2, 3) = 5

summa(2,1);

function product(a, b){
    let x = arguments;
    console.log(x, a, b);
    let p = arguments[0];
    for(let i = 1; i < arguments.length;i++){
        p *= arguments[i]
    }
    return p;
}

let m = product(1,2,3,4,5,6);
console.log(m);