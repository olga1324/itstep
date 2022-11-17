function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillRandomArray(a, n){
    for(let i = 0; i < n; i++){
        a[i] = randomNumber(1, 5);
    }
}

function getMaxElementInArray(massive){ // функция - это решение задачи в общем в виде без привязки к конкретному массиву

    let maxElement = massive[0];

    for(let i=1; i < massive.length; i++){
        if(massive[i] > maxElement){
            maxElement = massive[i];
        }
    }

    return maxElement;
}

function getMaxElementIndexInArray(array){ 

    let maxIndex = 0;

    for(let i=1; i < array.length; i++){
        if(array[i] > array[maxIndex]){
            maxIndex = i;
        }
    }

    return maxIndex;
}

function printArray(a){
    let str = a[0];

    for(let i = 1; i < a.length; i++){
        str = str + ", " + a[i];
    }

    console.log(str);
    return ;
}

function searchInArray(a, x){

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            return true; // нашли элемент
        } 
    }

    return false; // не нашли элемент
}

function searchIndexInArray(a, x){

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            return i; // нашли элемент
        } 
    }

    return -1; // не нашли элемент
}




let x = randomNumber(1,3);
let y = randomNumber(-19,10);
console.log(x, y);
let a = [];
fillRandomArray(a, 5);
console.log(a);

//варианты вызова функции
//вариант 1
console.log("1:");
console.log(getMaxElementInArray([1,2,3]));

//вариант 2
console.log("2:");
let z = getMaxElementInArray([1,2,3]);
console.log(z);

//вариант 3
console.log("3:");
let moymassive = [1,2,3];
z = getMaxElementInArray(moymassive);
console.log(z);

//вариант 4
console.log("4:");
console.log(moymassive);
fillRandomArray(moymassive, moymassive.length);
console.log(moymassive);
z = getMaxElementInArray(moymassive);
console.log(z);

//вариант 5
console.log("5:");
console.log(a); // массив a описан выше строка 28
z = getMaxElementInArray(a);
console.log(z);

console.log(a, [4,6,9], moymassive);
console.log(getMaxElementIndexInArray(a),getMaxElementIndexInArray([4,6,9]),getMaxElementIndexInArray(moymassive));

printArray(a); //фукнция ничего не возвращает, поэтому результат ее вывести нельзя через console.log
printArray([4,6,9]);
printArray(moymassive);

fillRandomArray([], 10);


console.log(searchInArray(a, 2));

if(searchInArray(a, 2)){
    console.log("Нашли");
} else {
    console.log("Не нашли");
}

let r = searchInArray(a, 2);

if(r){
    console.log("Нашли");
} else {
    console.log("Не нашли");
}