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


