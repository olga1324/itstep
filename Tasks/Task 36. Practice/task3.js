/* 3. Дано слово. Вывести набор букв, из которых 
состоит это слово без повторений.*/
console.log("Task 3");

["капибара"].forEach(s => {
    console.log([... new Set(s.split(""))].join(""))
})

//or

console.log("Task 3");

str = "Мадагаскар";

let uniqueLetters = str.toLowerCase().split("").filter(function(item, index){
    return str.toLowerCase().indexOf(item) == index; // совпадение индекса искомого элемента будет совпадать с индексом поиска только для первого вхождения
}).join("");
console.log(uniqueLetters);


