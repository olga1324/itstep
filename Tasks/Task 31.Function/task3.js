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

// or

function getMaxElementInArray(massive) { // функция - это решение задачи в общем в виде без привязки к конкретному массиву

    let maxElement = massive[0];

    for (let i = 1; i < massive.length; i++) {
        if (massive[i] > maxElement) {
            maxElement = massive[i];
        }
    }

    return maxElement;
}


