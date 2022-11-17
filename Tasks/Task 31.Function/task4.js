/*4. Разработать функцию для нахождения индекса
 максимального элемента в массиве.*/

/*let array = [1, 7, 28, 11, 15, 21];
let index = arr.indexOf(Math.max(...arr));
console.log(index)*/

//2

let m = [ 3, 4, 10, 12, 18];

function largestIndex(arr) {
    let counter = 1;
    let max = 0;
    for(counter; counter < arr.length; counter++){
        if ( arr[max] < arr[counter]) {
            max = counter;
        }
    }
    return max;
}
console.log(largestIndex(m));

//3

let array = [ 1, 6, 8, 9, 9];
let maxNumber = [0]; //найдем наибольшее число
for (let i = 0; i < array.length; i++){
    let comp = (array[i] - maxNumber[0]) > 0;
    if (comp) {
        maxNumber = [];
        maxNumber.push(array[i]);
    }
}
console.log(maxNumber)

let maxIndex = []; //найдем наибольший индекс
for (let i = 0; i < array.length; i++) {
    let comp = array[i] - maxNumber[0] == 0;
    if (comp){
        maxIndex.push(i);
    }
}
console.log(maxIndex);

//or

function getMaxElementIndexInArray(array) {

    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

//варианты вызова функции
//вариант 1
console.log("1:");
console.log(getMaxElementInArray([1, 2, 3]));

//вариант 2
console.log("2:");
let z = getMaxElementInArray([1, 2, 3]);
console.log(z);

//вариант 3
console.log("3:");
let moymassive = [1, 2, 3];
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
