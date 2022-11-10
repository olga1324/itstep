let a = [0,1,2,3,4,5,8];
console.log(a[4]);

let b = Array(0,1,2,3,4,5); // b = [0,1,2,3,4,5]
console.log(b[4]);

b[6] = 8; // b = [0,1,2,3,4,5,8]

let c = [];
c[78] = "abc";  // i = 78
c[79] = 34; // i = 79
c[80] = false;  // i= 80
c[44] = [];   // i = 40
console.log(c);
console.log(c[0], c[44]);

console.log(a.length, b.length, c.length, c[0]);
x = c[7] + a[0];

console.log(x);

const min = 50, max = 100, n = 5;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min; // рандомный 5 элемент массива
}
console.log(a);

let str = ""; // строка
for(let i = 0; i < a.length - 1; i++){ // последний эл-т м-ва
    str =  str + a[i] + ", ";
}
str = str + a[a.length - 1];
console.log(str);

let d = [], count = 0, j;// м-в + счетчик + эл-т м-ва
for(j = 0; j < n; j++){
    d[j] = Math.floor(Math.random() * (max - min + 1)) + min; // рандом d
}
console.log(d, j, d[j-1]);

for(let i = 0; i < d.length; i++){
    if(d[i] % 2 == 0){ // перебирает четные
        count++;
    }  
}
console.log("Количество четных элементов в массиве равно " + count);

let maxElement = d[0];
for(let i = 1; i < d.length; i++){
    if(d[i] > maxElement){
        maxElement = d[i];
    }
}
console.log("Максимальный элемент равен " + maxElement);

let minElement = d[0];
for(let i = 1; i < d.length; i++){
    if(d[i] < minElement){
        minElement = d[i];
    }
}
console.log("Минимальный элемент равен " + minElement);

let sum = 0;
for(let i = 0; i < d.length; i++){
    sum += d[i]
}
console.log("Среднее арифмитическое элементов равно " + (sum/(d.length)));

let reverse = [];
for (let k = 0, i = d.length-1; k < d.length; k++, i--){
    reverse[k] = d[i]; //reverse[k] = d[n-1-k];
}
console.log(d,reverse);