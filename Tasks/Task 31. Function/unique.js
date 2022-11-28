// [2, 3, 4, 1, 4, 3, 5, 2] => [2, 3, 4, 1, 5]

function fillRandomArray(a, n){
    let min = 1, max = 10;
    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function searchElementInArray(a, x){

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            return true; // завершит выполнение когда найдет элемент и вернет true
        }
    }

    return false; // вернет false, если не найдет элемент
}

let a = [], unique = [];
let j = 0; // index для массива unique

fillRandomArray(a, 10);

for(let i = 0; i < a.length; i++){
    if(!searchElementInArray(unique, a[i])){
        unique[j] = a[i];
        j++;
    }
}
console.log(a,unique);
a = unique;
console.log(a,unique);
