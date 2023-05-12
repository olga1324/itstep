/*3. Напишите функцию, которая на вход получает произвольное количество аргументов
 и возвращает массив, состоящих только из уникальных значений параметров функции.
 */

let arr = [];

 function unique(){
    for (let i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    return[...new Set (arr)];
 }

let arg = unique(2, 3, 3, 7, 7, 6, 2);
console.log(arg)


// or
function getUniqueParams(...params) { //params - это больная фантазия разработчика, как хочу нызвать переменную, так и называю

    //arguments
    //...params - sprad-оператор говорит о том, что все параметры функции которые не описаны - будут помещаться в params (массив)

    params = params.filter((item, index, array) => array.indexOf(item) == index);
    return params;
}

console.log(getUniqueParams(1, 2, 3, 5, 6, 8, 3, 6, 4, 3));

