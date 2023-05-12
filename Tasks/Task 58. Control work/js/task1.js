/*1. Написать функцию, принимающую в аргументах две строки и возвращающую true,
 если эти строки состоят из идентичных букв и false в противном случае.
 */

let str1 = "слово";
let str2 = "текст";

function equal(str1, str2) {
    return str1.toLowerCase().split("").sort().join("") ===
        str2.toLowerCase().split("").sort().join("")
}
console.log(equal(str1, str2));

//or
function getCompareString(str1, str2) {
    let sortStr1 = str1.split("").sort().join("");
    let sortStr2 = str2.split("").sort().join("");
    if (sortStr1 == sortStr2) {
        return true;
    }
    return false;
}

console.log(getCompareString("tok", "kot"));