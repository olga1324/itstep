/*4. Сделайте функцию, которая параметрами
 принимает 2 числа. Если эти числа равны - пусть
  функция вернет true, а если не равны - false.*/

let a = 5,
    b = 7;

function equality (a,b) {
    if (a == b){
        return true;
    } 
    return false;
}

console.log(equality(a, b))