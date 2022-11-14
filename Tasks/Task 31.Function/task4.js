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

