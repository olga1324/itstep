function summa(a, b){
    let x = a + b;
    return x;
}

let product = (a, b) => {
    let x = a * b;
    return x;
}

let m = product;
let n = summa;
console.log(summa(1, 2), n(1,2), product(2, 3), m(2,3));