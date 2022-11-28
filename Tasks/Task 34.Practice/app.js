console.log("Task 1:");
let a = [2, -1, 0, 1, -2, 4];

a = a.filter((item) => item >= 0);
a = a.map((item) => -item);

console.log(a);

console.log("Task 2:");
a = [2, -1, 0, 1, -2, 4];

let b = a.filter((item) => item % 2 == 0).reduce((sum, item) => sum + item, 0);
let c = a.filter((item) => item % 2 == 1).reduce((sum, item) => sum + item, 0);

let max = Math.max(b, c);
console.log(max);

console.log("Task 3:");
a = [2, -1, 0, 1, -2, 4];

b = a.filter((item, index) => index % 2 == 0).reduce((sum, item) => sum + item, 0);
c = a.filter((item, index) => index % 2 == 1).reduce((sum, item) => sum + item, 0);

max = Math.max(b, c);
console.log(max);

console.log("Task 4:");
a = [2, -1, 0, 1, -2, 4];

max = a.reduce((maximum, item) => {
    if(item > maximum)
        return item;
    return maximum;
});

console.log(max);

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

console.log("Task 6:");
a = [2, -1, 0, 1, -2, 4];
let x = 0;
a = a.filter((item) => item <= x);

console.log(a);