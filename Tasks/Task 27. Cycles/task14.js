// найти количество простых делителей ( на 1 и на себя)( task13)

N = 12;
count = 0;
var isPrime;

for (let i = 2; i <= N; i++) {
    if (N % i == 0) {
        isPrime = true; // булевская переменная, которая отвечает за критерий простоты числа

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }

    }
}

console.log(count);