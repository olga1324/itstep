/*3. Дан числовой массив.Сформировать два новых 
массива: в первом - элементы с четными индексами,
во втором - элементы с нечетными индексами.Сравнить
суммы полученных массивов(определить большую).*/
console.log("Task 3");

a = [3, 4, 10, 21, 8, 9, 5, 17];
evenIndex = [];
notEvenIndex = [];

a.forEach((item, index) => {
    if (index % 2 === 0) {
        evenIndex.push(item)
    } else {
        notEvenIndex.push(item)
    }
}, 0)

console.log(evenIndex);
console.log(notEvenIndex);

let sumEvenIndex = 0;

evenIndex.forEach(function (item) {
    sumEvenIndex += item;
})
console.log(sumEvenIndex);

let sumNotEvenIndex = 0;

notEvenIndex.forEach(function (item) {
    sumNotEvenIndex += item;
})
console.log(sumNotEvenIndex);

if (sumEvenIndex > sumNotEvenIndex) {
    console.log("Сумма элементов с четными индексами больше суммы нечетных");
    return;
} if (sumEvenIndex < sumNotEvenIndex) {
    console.log("Сумма элементов с четными индексами меньше суммы нечетных");
    return;
} else {
    console.log("Суммы элементов с четными и нечетными индексами равны");
    return;
}
