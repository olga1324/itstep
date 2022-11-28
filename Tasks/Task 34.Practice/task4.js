/*4. Дан числовой массив.Найти максимальный элемент
 массива.*/
console.log("Task 4");

a = [3, 4, 10, 21, 8, 9, 5, 17];

console.log("maxElement:", Math.max.apply(null, a));

//or

console.log("Task 4:");
a = [2, -1, 0, 1, -2, 4];

max = a.reduce((maximum, item) => {
    if(item > maximum)
        return item;
    return maximum;
});

console.log(max);