//task 1
let sum = 0, i = 2;

while (i <= 100) {
    sum += i;
    i += 2;
}

console.log(sum, i);

//task 2
sum = 0, i = 2;

do {
    sum += i;
    i += 2;
} while (i <= 100);

console.log(sum, i);

//task 3
for (sum = 0, i = 2; i <= 100; i += 2) {
    sum += i;
}

console.log(sum, i);

//task 4
let n = 1_000_000, count = 0;

while (n != 1) {

    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = (n * 3 + 1) / 2;
    }
    count++;
}
console.log(count);


//task 5
count = 0, i = 0;

while (count != 51) {

    i++;
    if (i % 7 == 0 && i % 5 != 0) {
        count++;
    }
}

console.log(i);

//task 6
count = 0, i = 0;

do {
    i++;
    if (i % 7 == 0 && i % 5 != 0) {
        count++;
    }

} while (count != 51);

console.log(i);
//task 7
count = 0, i = 100;

do {

    if (i % 21 == 0 || i % 14 != 0) {
        count++;
        console.log(i)
    }
    i++;
} while (count != 10);

//task 8
for (i = 100, count = 0; count <= 10; i++) {
    if (i % 21 == 0 || i % 14 != 0) {
        count++;
        console.log(i)
    }
}

