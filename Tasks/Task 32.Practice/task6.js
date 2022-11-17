/*6. Сделайте функцию, которая параметром 
принимает число и проверяет - отрицательное оно 
или нет. Если отрицательное - пусть функция 
вернет true, а если нет - false.*/

let a = -5;
   
function negative(a) {
    if (a < 0) {
        return true;
    }
    return false;
}

console.log(negative(a))
