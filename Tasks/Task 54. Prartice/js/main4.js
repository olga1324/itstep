/*4. Даны поле поле ввода и кнопка. Реализовать игру в города для 2 игроков
    - сначала первый игрок вводит город, а второй должен ввести другой город, 
    который должен начинаться на последнюю букву города первого игрока и т.д..
     Если на такую букву городов не может быть (ь,ъ,ы,ё), то должна браться
      предпоследняя буква.
    - все города должны выводится в 2 блока, причем в каждый блок должны 
    выводится города только одного игрока.
    - предусмотреть вариант, чтобы нельзя было вводить один и тот же город 
    2 раза.
    */

var cities = []; // список всех введенных городов
var currentPlayer = 1; // 1 или 2
var lastLetter; 
var badLetter = ["ь", "ъ", "ы", "ё"];

document.querySelector(".play").onclick = function(){
    let currentCity = document.querySelector("#city").value.toLowerCase();
     // переводим города в нижний регистр

     // находим последнюю букву
    let last = currentCity[currentCity.length - 1]; // проходимся по длинне слова
    let currentIndex = currentCity.length - 1;
    while(badLetter.includes(last)){ // если оканчивается на плохую букву, берем перед ней
        currentIndex--;
        last = currentCity[currentIndex];
    }
    
    // массив первого игрока с городами
    first = currentCity[0];

    if(lastLetter === undefined){ 
        lastLetter = last;
        cities.push(currentCity); // добавляем в массив к первому игроку
        document.querySelector(".first-player").insertAdjacentHTML('beforeend',`<div>${currentCity}</div>`);
        currentPlayer = 2; // переходим ко второму игроку
    } else {
        if(lastLetter != first) // если последняя буква не первая, возвращаем ложь
            return false;
        
        if(cities.includes(currentCity)) // если город уже назван, возращает ложь
            return false;

        cities.push(currentCity); // добавляем в массив
        lastLetter = last;

        if(currentPlayer == 1){  // если игрок1, добавляем в массив и переходим ко второму
            document.querySelector(".first-player").insertAdjacentHTML('beforeend',`<div>${currentCity}</div>`);
            currentPlayer = 2;
        } else { // если игрок2, добавляем в массив и переходим к первому
            document.querySelector(".second-player").insertAdjacentHTML('beforeend',`<div>${currentCity}</div>`);
            currentPlayer = 1;
        }
    }
}