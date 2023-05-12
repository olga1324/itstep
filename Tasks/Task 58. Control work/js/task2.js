/*2. Напишите функцию, которая будет проходить через массив целых чисел и выводить 
индекс каждого элемента с задержкой в 3 секунды.*/

 let arr = [11, 13, 17, 22, 25]
 

     for (let i = 0; i < arr.length; i++) {
         setTimeout(() => console.log(`Элемент ${arr[i]} : индекс ${i}`), 3000 * i)
         }
    
 
 //or
function printWithDelay(a) {
    let index = 0;

    let timer = setInterval(function () {
        console.log(index);
        index++;
        if (index == a.length) {
            clearInterval(timer);
        }
    }, 1000);

    console.log("Hi");
}

function printWithDelay2(a) {

    for (let i = 0; i < a.length; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
        console.log("Hi");
    }
}

printWithDelay2([1, 9, 3, 8, 5, 6, 7]);
 