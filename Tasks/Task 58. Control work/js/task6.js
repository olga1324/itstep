/*6. Создать массив на 100 элементов и заполнить его случайными числами.
 Найти разницу между максимальным и мнимальными элементами.*/

let arr = [];

for (let i = 0; i <= 100; i++) {
   arr.push(Math.floor(Math.random() * 100) + 1);
}

max = arr.reduce((maximum, item) => {
   if (item > maximum)
      return item;
   return maximum;
});

let min = arr.reduce((minimum, item) => {
   if (item < minimum)
      return item;
   return minimum;
});

console.log(max - min);

//or
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = new Array(100);

for (let i = 0; i < a.length; i++) {
   a[i] = getRandomNumber(-100, 100);
}

let maxElement = a.reduce(function (max, item) {
   if (item > max) {
      return item;
   }
   return max;
}, a[0]);

let minElement = a.reduce(function (min, item) {
   if (item < min) {
      return item;
   }
   return min;
}, a[0]);

console.log(a);
console.log(minElement, maxElement, maxElement - minElement);
