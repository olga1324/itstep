/*1.concat: Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их
 вместе.*/
console.log("Task 1");

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);

console.log(a, b);
console.log(c);

//2.reverse: Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log("Task 2");

const d = [1, 2, 3];
d.reverse();

console.log(d);

/*3.push, unshift: Дан массив [1, 2, 3]. Добавьте ему в конец 
элементы 4, 5, 6.*/
console.log("Task 3");

const e = [1, 2, 3];
e.push(4, 5, 6);

console.log(e);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. 
console.log("Task 4");

let m = [1, 2, 3];
m.unshift(4, 5, 6);

console.log(m);

/*5.shift, pop: Дан массив [7, 9, 3]. Выведите на 
экран первый элемент.*/
console.log("Task 5");

m = [7, 9, 3];
let n = m.shift();

console.log(n); 

/*6. Дан массив [7, 9, 3]. Выведите на экран 
последний элемент.*/
console.log("Task 6");

m = [7, 9, 3];
n = m.pop();

console.log(n); 

/*7. Дан массив [1, 2, 3, 4, 5]. С помощью метода 
slice запишите в новый элементы [1, 2, 3].*/
console.log("Task 7");

m = [1, 2, 3, 4, 5];

console.log(m.slice(0, 3));


/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода 
slice запишите в новый элементы [4, 5]*/
console.log("Task 8");

m = [1, 2, 3, 4, 5];
n = m.slice(-2);

console.log(n);

//or
b = a.slice(3);
console.log(b);

/*9. Дан массив [1, 2, 3, 4, 5]. С помощью метода 
splice преобразуйте массив в [1, 4, 5].*/
console.log("Task 9");

m = [1, 2, 3, 4, 5];
n = m.splice(1, 2);

console.log(m);

/*10. Дан массив [1, 2, 3, 4, 5]. С помощью метода 
splice запишите в новый массив элементы [2, 3, 4].*/
console.log("Task 10");

m = [1, 2, 3, 4, 5];
n = m.splice(1, 3);

console.log(n);

/*11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice 
сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
console.log("Task 11");

m = [1, 2, 3, 4, 5];
m.splice(3, 0, "a", "b", "c");

console.log(m);

/*12. Дан массив [1, 2, 3, 4, 5]. С помощью метода 
splice сделайте из него массив 
[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']*/
console.log("Task 12");

m = [1, 2, 3, 4, 5];
m.splice(1, 0, "a", "b");
m.splice(6, 0, "c");
m.splice(8, 0, "e");

console.log(m);

/*13. .sort: Дан массив [3, 4, 1, 2, 7].
 Отсортируйте его.*/
console.log("Task 13");

m = [3, 4, 1, 2, 7];
m.sort();

console.log(m);

//or
a = [3, 14, 1, 2, 7];
a.sort(function(a,b){
    if(a == b){
        return 0;
    }
    if(a > b){
        return 1;
    }
    return -1;
});
console.log(a);
a = [3, 14, 1, 2, 7];
a.sort((a,b) => a-b);
console.log(a);


/*14.forEach: Дан массив с числами. Создайте новый 
массив, состоящий из квадратов этих чисел.*/
console.log("Task 14");

//forEach выполняет указанную функцию для каждого элемента в массиве

m = [3, 4, 6, 9, 11, 15, 18];
m.forEach(function(item, i, array){
    array[i] = item * item;
})

console.log(m);

//or
a = [3, 14, 1, 2, 7];
b = [];
a.forEach(function(item, i){ //item == a[i]
    b.push(item**2);
})
console.log(b);

//or

function square(x){
    b.push(x*x);
}
a = [3, 14, 1, 2, 7];
b = [];
a.forEach(square);
console.log(b);

//15. Дан массив с числами. Найдите сумму этих чисел
console.log("Task 15");

let sum = 0;

m = [3, 4, 6, 9, 11, 15, 18];
m.forEach(function(item){
    sum += item;
})

console.log(sum);

/*.map:16. Дан массив с числами. Сделайте из него
 массив, состоящий из квадратов этих чисел. */
console.log("Task 16");

/*map создает новый массив с результатом вызова
указанной функции для каждого элемента*/


n = m.map(function(item, i, array){
    return array[i] ** 2;
});

console.log(n);

/*17. Дан массив с числами. Проверьте то,что все 
элементы в массиве больше нуля.every, some:*/
console.log("Task 17");

/* every проверяет,удовлетворяют ли все элементы условиюб
заданному в передаваемой функции. true/false*/

m = [3, 4, -6, 9, 11, -15, -18];

function moreZero(num){
    return num > 0;
}

console.log(m.every(moreZero));


/*18. Дан массив с числами. Проверьте то, что в нем
 есть отрицательные элементы. */
console.log("Task 18");

/*some проверяет, удовлетворяет ли какоой-нибудь элемент 
заданному в передаваемой функции. true/false*/

m = [3, 4, -6, 9, 11, -15, -18];

function lessZero(num) {
    return num < 0;
}

console.log(m.some(lessZero));

//or
a = [3, -14, 1, 2, 7];

result = a.some(function(item){
    return item < 0;
});
console.log(result);

/*19. Дан массив с числами. Найдите сумму этих чисел.
reduce, reduceRight:*/
console.log("Task 19");

/* reduce применяет ф-цию к каждому эл-ту [], 
возврващая одно результатирующее значениею слева - направо*/

m = [3, 4, 6, 9, 11, 8];

sum = m.reduce(function(summa, item){
    return summa + item;
}, 0);//0- начальное значение суммы

console.log(sum);

//or
a = [3, -14, 1, 2, 7];

sum = a.reduce(function(sum, item, i){
    console.log("Итерация", i,"Элемент",item, "Сумма", sum );
    return sum + item;
}, 0); // sum = 0; sum равно значению второго параметра
console.log(sum);
sum = a.reduce(function(sum, item, i){
    console.log("Итерация", i,"Элемент",item, "Сумма", sum );
    return sum + item;
});
console.log(sum);

/*20. Дан массив с числами. Найдите сумму первых N
элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6]
- суммируем первые 3 элемента, так как дальше стоит 
элемент с числом 0.*/
console.log("Task 20");

m = [1, 2, 3, 0, 4, 5, 6];
sum = 0;

let sumN = m.reduce(function(summa, item){
    if (item == 0){
        sum = summa;
    } else {
        return summa + item;
    }
})

console.log(sum);

//or
a = [3, 14, 0, 1, 2, 7];

isNull = false;
sum = a.reduce(function(sum, item){
    if(item == 0)
        isNull = true;

    if(!isNull)
        return sum + item;
    
    return sum;
}, 0);
console.log(sum);


/*21. Дан массив с числами. Найдите сумму последних 
N элементов до первого нуля с конца. Пример: 
[1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента,
так как дальше стоит элемент с числом 0.*/ 
console.log("Task 21");

//reduceRight справа - налево
m = [1, 2, 3, 0, 4, 5, 6];
sum = 0;

sumN = m.reduceRight(function (summa, item) {
    if (item == 0) {
        sum = summa;
    } else {
        return summa + item;
    }
})

console.log(sum);

//or
a = [3, 14, 0, 1, 2, 7];

result = 0;
a.reduceRight(function(sum, item){
    if(item == 0){
        result = sum;
        return sum;
    }
    return sum + item;
}, 0);
console.log(result);

/*22. Дан массив с числами. Узнайте сколько элементов
с начала массива надо сложить, чтобы в сумме
 получилось больше 10-ти. */
console.log("Task 22");

m = [4, 2, 3, 8, 4, 5, 6];
let element = 1;
number = m.reduce(function(summa, item){
    if (summa > 10){
        console.log(element);
        return;
    } else {
        element++;
        return summa + item;
    }
}, 0);

//or
a = [3, 14, 0, 1, 2, 7];

let count = 0;

a.reduce(function(sum, item){
    if(sum > 10){
        return sum;
    }

    count++;
    return sum + item;
}, 0);

console.log(count);


/*23. Дан массив с числами. Узнайте сколько элементов 
с конца массива надо сложить, чтобы в сумме 
получилось больше 10-ти. */
console.log("Task 23");

m = [4, 2, 3, 8, 4, 5, 6];

element = 1;
number = m.reduceRight(function (summa, item) {
    if (summa > 10) {
        console.log(element);
        return;
    } else {
        element++;
        return summa + item;
    }
}, 0);

//or
a = [3, 14, 0, 1, 2, 7];

count = 0;

a.reduceRight(function(sum, item){
    if(sum > 10){
        return sum;
    }

    count++;
    return sum + item;
}, 0);

console.log(count);

/*Комбинирование:24. Дан массив с числами. Оставьте
 в нем только положительные числа. Затем извлеките 
 квадратный корень и этих чисел.*/
console.log("Task 24");

m = [-4, 16, 9,- 8,- 4, 25, -6];

function positiv(item){
    return item > 0
};

let arr = m.filter(positiv);
console.log(arr);

arr.forEach(function(item, i, array){
    array[i] = item ** 0.5;
});

console.log(arr);

//or
a = [9, -14, 0, 1, 4, 49];

b = a.filter(function(item){
    return item > 0;
});

b = b.map(function(item){
    return item ** 0.5;
});

console.log(b);

//or

b = a.filter(function(item){
    return item > 0;
}).map(function(item){
    return item ** 0.5;
});

console.log(b);

//or
sum = a.filter((item) => item > 0).reduce((sum, item) => sum + item);


//  в данном случае функции x и y  эквиваленты
let x = (item) => item > 0;

function y(item){
    return item > 0;
}

function compare(a , b){
    if(a == b){
        return 0;
    }
    if(a > b){
        return 1;
    }
    return -1;    
}

const compareArrow = (a , b) => {
    if(a == b){
        return 0;
    }
    if(a > b){
        return 1;
    }
    return -1;    
}