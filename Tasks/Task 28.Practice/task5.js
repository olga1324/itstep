/*Дано 2 числа. Если сумма этих чисел четная,
 то вывести произведение, если нет - то частное.*/

 var a = 6,
     b = 4,
     sum = a + b;

if(sum % 2 == 0){
    console.log(a * b);
} else if ( sum % 2 == 1){
    console.log(a / b);
}