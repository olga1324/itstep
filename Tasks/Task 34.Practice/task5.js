/*5. Дан числовой массив.Найти разность максимального 
и мининального элемента массива.*/
console.log("Task 5");

a = [3, 4, 10, 21, 8, 9, 5, 17];

console.log("maxElement:", Math.max.apply(null, a));
console.log("minElement:", Math.min.apply(null, a));
console.log(Math.max.apply(null, a) - Math.min.apply(null, a));
