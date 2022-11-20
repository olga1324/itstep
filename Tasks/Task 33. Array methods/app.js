let a = [1,2,3,4,5];
console.log(a); 
a[a.length] = 6; // добавляет в конец i= 5 номер 6
console.log(a); 
a.push(7); //добавляет число в конец
console.log(a); 
a.push(8,9);
console.log(a); 
let x = a.pop(); // удаляет число вконце
console.log(a, x); 
a.shift(); // удаляет число в начале
console.log(a); 
a.unshift(0,5); // добавляет число в начале
console.log(a);
let b = a.map(function(item){ //item - элемент массива на каждой итерации 
    // числовые операции a.map
    return item*2;
}); 
console.log(b);

b = a.map(function(item, i){ //item - элемент массива на каждой итерации, i - индекс текущего элемента в массиве 
    return i*2;
}); 
console.log(b);

b = a.map(function(item, i, array){ //item - элемент массива на каждой итерации, i - индекс текущего элемента в массиве, array саам массив a
    return array[i] * 2;
}); 
console.log(b);

b = a.map(function(item, i){ //item - элемент массива на каждой итерации, i - индекс текущего элемента в массиве 
    if(i % 2 == 0){
        return item * 2;
    }
    return item;
}); 
console.log(a, b);

console.log(a);
a.forEach(function(item){
    console.log(item);   
});
console.log(a);

a.reverse();

console.log(a);

let c = a.filter(function(item){
    return item % 2 == 0;
});
console.log(c);
c = a.filter( (item) => item % 2 == 0);
console.log(c);

let y;
if( x > 0){
    y = true;
} else {
    y = false;
}

y = (x > 0) ? true : false; // тернарный оператор

x = undefined;
y = "hello";

let str = x ?? y; //оператор нулевого слияния

if(x != null && x != undefined){
    str = x;
} else {
    str = y;
}

function getFullName(name, lastname){
    lastname = lastname ?? "";
    //lastname = lastname || "";
    return name + " " + lastname;
}

console.log(getFullName("Вася", "Пупкин"));
console.log(getFullName("Вася"));
console.log(getFullName("Вася", 0));

let  sum = 0;

a.forEach(function(item){
    sum += item;
});

console.log(sum);

sum = a.reduce(function(summa, item){ // возвращает результат
    return summa + item;
}, 0);

console.log(sum);