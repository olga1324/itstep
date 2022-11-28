/*4. Даны 2 слова. Проверить, состоят ли они из
 одних и тех же букв.*/
console.log("Task 4");

let word1 = "слово";
let word2 = "текст";

function check(word1, word2){
    return word1.toLowerCase().split("").sort().join("") === 
    word2.toLowerCase().split("").sort().join("")
}
console.log(check(word1, word2));