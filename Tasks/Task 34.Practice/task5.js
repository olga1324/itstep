/*5. Дан числовой массив.Найти разность максимального 
и мининального элемента массива.*/
console.log("Task 5");

a = [3, 4, 10, 21, 8, 9, 5, 17];

console.log("maxElement:", Math.max.apply(null, a));
console.log("minElement:", Math.min.apply(null, a));
console.log(Math.max.apply(null, a) - Math.min.apply(null, a));

//or

console.log("Task 5:");
a = [2, -1, 0, 1, -2, 4];

max = a.reduce((maximum, item) => {
    if(item > maximum)
        return item;
    return maximum;
});

let min = a.reduce((minimum, item) => {
    if(item < minimum)
        return item;
    return minimum;
});

console.log(max-min);

console.log("Task 5:");
a = [2, -1, 0, 1, -2, 4];


a.sort((a, b) => a - b);

a.sort(function(a, b){
    return a - b;
})

console.log(a[a.length-1] - a[0]);