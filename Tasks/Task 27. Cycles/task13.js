//дано число N, посчитать количество делителей


N = 123456789;
var count = 0;
var isPrime;

for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
        count++;
    }
}

console.log(count);