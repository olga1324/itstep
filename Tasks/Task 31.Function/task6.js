/*6. Разработать функцию, которая уменьшает четные 
элементы в 2 раза.*/

let arr = [18, 3, 6, 7, 8, 10, 22];

function even(a){
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            a[i] = a[i] / 2;
            arr.push(a[i]);
        } 
    }  
    return arr;
}

console.log(even(arr));



//2 - только выводит четные

let Arr = [1, 12, 6, 7, 8, 10, 21];

let filtred = Arr.filter(function (element, index, array){
    return (element % 2 === 0);
});
console.log (filtred); 


