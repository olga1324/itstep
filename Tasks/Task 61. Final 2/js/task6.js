//6. Дано предложение. Найти самое короткое слово в предложении.
let arr = "Найти самое короткое слово в предложении.";

function short (arr){
let shortWord = arr.split(" ").reduce(function (word, item) {
    if (item.length < word.length) {
        return item;
    }
    return word;
});

return shortWord;
}
console.log(short(arr));