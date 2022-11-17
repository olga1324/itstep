/*5. Сделайте функцию, которая параметрами 
принимает 2 числа. Если их сумма больше 10 - 
пусть функция вернет true, а если нет - false.*/

let a = 5,
    b = 3;

function sum(a, b) {
    if (a + b > 10) {
        return true;
    }
    return false;
}

console.log(sum(a, b))