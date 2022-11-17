/*8. Сделайте функцию, которая параметром 
принимает число и возвращает массив его делителей*/

let numb = 42;

function div (numb) {
    i = numb,
    arr = [];
    while (i > 0) {
        if (numb % i == 0) {
            arr.push(i)
        }
        i--;
    }
    return arr;
}
console.log(div(numb));