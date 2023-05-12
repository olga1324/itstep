/*4. Написать функцию, принимающую в аргументах массив и возвращающую новый массив, 
в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию,
 но при этом сами чётные и нечетные числа остаются на своих местах. 
 ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).*/

function sortNumber(arrNum) {
    let even = arrNum.filter(item => item % 2 == 0).sort((a, b) => b - a); //  [4, 2]
    let odd = arrNum.filter(item => item % 2 != 0).sort((a, b) => a - b); // [3, 5, 7, 9, 17]
    let result = [];

    arrNum.forEach(item => {
        if (item % 2 != 0) {
            result.push(odd.shift())
        }
        else {
            result.push(even.shift())
        }
    });
    return result
}

let arrNum = [7, 3, 2, 9, 5, 8, 17, 6, 4];
let result = sortNumber(arrNum);
console.log(result) 

//or

function superSorting(a) {
    let even = a.filter((item) => item % 2 == 0).sort((a, b) => b - a); // по убыванию
    let odd = a.filter((item) => item % 2 == 1).sort((a, b) => a - b); // по возрастанию


    for (let i = 0, evenIndex = 0, oddIndex = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            a[i] = even[evenIndex];
            evenIndex++;
        } else {
            a[i] = odd[oddIndex];
            oddIndex++;
        }
    }

    return a;
}


let array = [7, 3, 4, 9, 5, 2, 17];
console.log(array);
console.log(superSorting(array));