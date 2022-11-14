
let a = [];
const min = 50, max = 100, n = 10;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 1");
let k = 3;
for(let i = a.length - k; i < a.length; i++){
    console.log(a[i]);
}

console.log("Task 2");

k = 4;
for(let i = 0; i < a.length; i++){
    if(a[i] % k == 0){
        console.log(a[i]);
    }
}

console.log("Task 3");

let maxElement = a[0];
for(let i = 1; i < a.length; i++){
    if(a[i] > maxElement){
        maxElement = a[i];
    }
}

let minElement = a[0];
for(let i = 1; i < a.length; i++){
    if(a[i] < minElement){
        minElement = a[i];
    }
}

console.log(maxElement+minElement);

console.log("Task 4");

let maxIndex = 0;
for(let i = 1; i < a.length; i++){
    if(a[i] > a[maxIndex]){
        maxIndex = i;
    }
}

let minIndex = 0;
for(let i = 1; i < a.length; i++){
    if(a[i] < a[minIndex]){
        minIndex = i;
    }
}
console.log(a);
let temp;

temp = a[maxIndex];
a[maxIndex] = a[minIndex];
a[minIndex] = temp;

console.log(a);


console.log("Task 5.1");

let  b = [], c = [];
let j = 0, q =0;

for(let i = 0; i < a.length; i++){
    if(i % 2 == 0){
        b[j] = a[i];
        j++;
    } else {
        c[q] = a[i];
        q++;
    }
}
console.log(a);
console.log(b);
console.log(c);

console.log("Task 5.2");
b = [], c = [];
j = 0, q =0;

for(let i = 0; i < a.length; i+=2, j++){
    b[j] = a[i];
}

for(let i = 1; i < a.length; i+=2, q++){
    c[q] = a[i];
}

console.log(a);
console.log(b);
console.log(c);

console.log("Task 6");

console.log(a);
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        a[i] = a[i] / 2;
    } else {
        a[i]++;
    }
}
console.log(a);

console.log("Task 7");

let x = 52;
let isFind = false;

for(let i = 0; i < a.length; i++){
    if(a[i] == x){
        isFind = true; 
        break;
    }
}

console.log(a);
if(isFind){ // isFind == true
    console.log(`${x} найдено`);
} else {
    console.log(`${x} не найдено`);
}

console.log("Task 8");
console.log(a);
k = 5;
for(let i = k; i < a.length - 1; i++){
    a[i] = a[i+1];
}
a.length--; // уменьшаем - плохая практика
console.log(a);

console.log("Task 9.1");

countAsc = 0;
countDesc = 0;
for(let i = 1; i < a.length; i++){
    if(a[i] > a[i-1]){
        countAsc++;
    }
    if(a[i] < a[i-1]){
        countDesc++;
    }   
}
if(countAsc == a.length - 1){
    console.log("Массив упорядочен по возрастанию");
} else if(countDesc == a.length - 1){
    console.log("Массив упорядочен по убыванию");
} else {
    console.log("Массив не упорядочен");
}

console.log("Task 9.2");

let isAsc = true, isDesc = true; // предполагаем, что по-умолчанию массив упорядочен по возрастанию и убыванию

for(let i = 1; i < a.length; i++){
    if(a[i] < a[i-1]){ // не упорядочен по возрастанию
        isAsc = false;
    }
    if(a[i] > a[i-1]){ // не упорядочен по убыванию
        isDesc = false;
    }
}

if(isAsc && isDesc){
    console.log("Массив состоит из одинаковых элементов");
} else if(isAsc){
    console.log("Массив упорядочен по возрастанию");
} else if (isDesc){
 console.log("Массив упорядочен по убыванию");
} else {
    console.log("Массив не упорядочен");
}

console.log("Task 10");

a = [8, 8, 8, 8, 7, 3, 8, 3, 6, 6];
console.log(a);

for(let i = 0; i < a.length; i++){
    //a[i] - искомый элемент
    let isFind = false; // проверка на нахождение копий элемента
    for(let j = i+1; j < a.length; j++){ // поиск копий, начиная с элемента, стоящего после нашего
        if(a[i] == a[j]){ // проверка на дупликат
            isFind = true; // нашли копию, значит себя тоже будем удалять

            // алгоритм удаления элемента с номером j со сдвигом всех элементов влево
            for(let k = j; k < a.length - 1; k++){
                a[k] = a[k+1];
            }
            a.length--;  
            j--;            
        }
    }
    if(isFind){ // копии элемента найдены

        // алгоритм удаления элемента с номером i (сам элемент, копии которого надо было найти) со сдвигом всех элементов влево
        for(let k = i; k < a.length - 1; k++){
            a[k] = a[k+1];
        }
        a.length--; 
        i--; // чтобы не пропустить элемент, который стал на место удаленного, мы должны остаться на том же номере, поэтому надо компенисровать переход к следующему (i-- и i++ дадут в сумме 0, то есть останемся на той же позиции)
    }
}
console.log(a);