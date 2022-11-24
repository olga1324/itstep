console.log("Task 7:");
let a = [1, 2, 3, 4, 5];
let b = a.slice(0, 3);
console.log(b);

console.log("Task 8:");
a = [1, 2, 3, 4, 5];
b = a.slice(3);
console.log(b);
b = a.slice(-2);
console.log(b);

console.log("Task 9:");
a = [1, 2, 3, 4, 5];
a.splice(1, 2);
console.log(a);


console.log("Task 10:");
a = [1, 2, 3, 4, 5];
b = a.splice(1, 3);
console.log(b);

console.log("Task 11:");
a = [1, 2, 3, 4, 5];
a.splice(3, 0, "a", "b", "c");
console.log(a);

console.log("Task 12:");
a = [1, 2, 3, 4, 5];
a.splice(1, 0, "a", "b");
a.splice(6,0,"c");
a.splice(8,0,"e");
console.log(a);

console.log("Task 13:");
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

console.log("Task 14:");
a = [3, 14, 1, 2, 7];
b = [];
a.forEach(function(item, i){ //item == a[i]
    b.push(item**2);
})
console.log(b);

function square(x){
    b.push(x*x);
}
a = [3, 14, 1, 2, 7];
b = [];
a.forEach(square);
console.log(b);

console.log("Task 15:");
a = [3, 14, 1, 2, 7];
let sum = 0;
a.forEach(function(item){
    sum += item;
})
console.log(sum);

console.log("Task 16:");
a = [3, 14, 1, 2, 7];

b = a.map(function(item){
    return item **2;
})
console.log(a,b);

console.log("Task 17:");
a = [3, -14, 1, 2, 7];

let result = a.every(function(item){
    return item > 0;
});
console.log(result);

console.log("Task 18:");
a = [3, -14, 1, 2, 7];

result = a.some(function(item){
    return item < 0;
});
console.log(result);

console.log("Task 19:");
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


console.log("Task 20:");
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

console.log("Task 21:");
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

console.log("Task 22:");
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

console.log("Task 23:");
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

console.log("Task 24:");

a = [9, -14, 0, 1, 4, 49];

b = a.filter(function(item){
    return item > 0;
});

b = b.map(function(item){
    return item ** 0.5;
});

console.log(b);

b = a.filter(function(item){
    return item > 0;
}).map(function(item){
    return item ** 0.5;
});

console.log(b);

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