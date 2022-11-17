/*5. Разработать функцию, которая выводит элемента
 массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)*/

 function printArray(a) {
    let str = a[0];

    for (let i = 1; i < a.length; i++) {
        str = str + ", " + a[i];
    }

    console.log(str);
    return;
}

printArray(a); //фукнция ничего не возвращает, поэтому результат ее вывести нельзя через console.log
printArray([4, 6, 9]);
printArray(moymassive);
