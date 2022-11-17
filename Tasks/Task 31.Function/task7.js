/*7. Разработать функцию, которая проверят 
наличие некоторого элемента в массиве.*/

let elem = 25;
let arr = [11, 13, 17, 22, 25]

function contains ( arr, elem) {
    for (let i = 0; i < elem.length; i++){
       if(elem[i] === arr) {
            return elem[i];
        }
    }
}

console.log(elem);

//or

function searchInArray(a, x) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return true; // нашли элемент
        }
    }

    return false; // не нашли элемент
}

console.log(searchInArray(a, 2));

if (searchInArray(a, 2)) {
    console.log("Нашли");
} else {
    console.log("Не нашли");
}





