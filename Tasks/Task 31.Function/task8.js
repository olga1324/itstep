/*8. Разработать функцию, которая ищет 
элемент в массиве и возвращает его индекс,
 если находит его, и -1 - в противном случае.*/

let elem = 25;
let arr = [11, 13, 17, 22, 25]

function contains(arr, elem) {
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] === arr) {
            return elem[i];
        } else {
            elem[i] - 1;
        }
    }
}

console.log(elem[i]);

//or

function searchIndexInArray(a, x) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return i; // нашли элемент
        }
    }

    return -1; // не нашли элемент
}

if (r) {
    console.log("Нашли");
} else {
    console.log("Не нашли");
}