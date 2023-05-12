/*9. Напишите функцию, которая принимает строку на английском языке в качестве 
аргумента и возвращает количество гласных, содержащихся в этой строке.*/

let vowelsCount = 0
let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

let str = 'Today is the best day Of my life'

for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
        vowelsCount += 1
    }
}

console.log(vowelsCount)

//or
function getVowels(str) {

    let pattern = "aeioyu";

    let count = str.split("").filter((letter) => pattern.includes(letter)).length;

    return count;
}

console.log("Mama Papa Cat", " => ", getVowels("Mama Papa Cat"));
