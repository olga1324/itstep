//Дано число грибов. Вывести в консоль число и слово "грибы" 
//с соответствующим окончанием (например, "17 грибов", "1 гриб",
// "2 гриба" и т.д.) 
var mushrooms = 1523;
if (mushrooms % 10 == 1 && mushrooms % 100 != 11) {
    console.log(`${mushrooms} гриб`);
} else if ((mushrooms % 10 >= 2 && mushrooms % 10 <= 4) && (mushrooms % 100 < 12 || mushrooms % 100 > 14)) { // или !(mushrooms % 100 >= 12 && mushrooms % 100 <= 14)
    console.log(`${mushrooms} гриба`);
} else {
    console.log(`${mushrooms} грибов`);
}