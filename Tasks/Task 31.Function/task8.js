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
