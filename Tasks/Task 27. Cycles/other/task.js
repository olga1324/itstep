var i = 2;
var pr = 1;

while (i <= 10) {

    i % 2 != 0;
    pr *= i; 
    i += 2; // вывести нечетные
    console.log(`Итерация ${i / 2} pr=${pr}, i=${i}`);
}

console.log(pr); 
console.log(i);

//or
n = 1, p = 1;

while (n <= 5) {

    p = p * (2 * n);

    n++;

    console.log(`Итерация ${n - 1} p=${p}, n=${n}`);
}