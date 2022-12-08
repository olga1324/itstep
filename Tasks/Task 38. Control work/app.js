console.log("Task 9");

let date = "13.09.2022";
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];

let year = + date.split(".")[2]; //date.split(".") = ["13", "09", "2022"], date.split(".")[2] = "2022", унарный плюс преобразует строку в число 
let month = + date.split(".")[1];
let day = + date.split(".")[0];


if((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)){
    months[1] = 29;
}

let days = day;
for(let i = 0; i < month-1; i++){
    days += months[i];
}

console.log(days);

console.log("Task 10");

let array = [345, 346, 4574357, 12312, 5345, 7474];

let result = array.reduce((maxNumber, item) => {

    let summDigitsOfMaxNumber = maxNumber.toString().split("").reduce((sum, element) => sum + (+ element), 0);
    let summDigitsOfItem = item.toString().split("").reduce((sum, element) => sum + (+ element), 0);

    if(summDigitsOfItem > summDigitsOfMaxNumber){
        return item;
    }
    return maxNumber;
});

console.log(result);

console.log("Task 14");

let str = "Аргентина манит негра";

let unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);
let uniqueCount = [];

unique.forEach(function(item, index, array){
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    uniqueCount[index] = count;
});

unique.forEach((item, index) => console.log(item, "->", uniqueCount[index]));

// или
str = "Аргентина манит негра";

unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);

unique.forEach(function(item, index, array){
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    console.log(item, "->",count);
});

console.log("Task 18");

let a = [1, 2, 3, 4, 5, 6, 7];

a = a.map(function(item, index){
    if(index % 2 == 1){
        return 0;
    }
    return item;
})
console.log(a);

console.log("Task 12");

let firstWord = "Мама";
let secondWord = "Папа";

let firstWordNew = firstWord.toLowerCase().split("").filter(function(item){
    return !secondWord.includes(item); 
}).join(""); 

let secondWordNew = secondWord.toLowerCase().split("").filter(function(item){
    return !firstWord.includes(item); 
}).join(""); 

console.log(firstWordNew, secondWordNew);