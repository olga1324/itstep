/*3. Разработать функцию для нахождения максимального
 элемента в массиве.*/

function maxElement(array){
    let a = array.length;
    max = array[ a - 1];
    while (a--){
        if(array[a] > max){
            max = array[a]
        }
    }
    return max;
};

 let Array = [1, 7, 28, 11, 15, 21];
 let m = maxElement(Array);
 console.log(m);

 //2

/*let arr = [1, 7, 28, 11, 15, 21];
let max = Math.max.apply(null, arr);
console.log(max)*/


