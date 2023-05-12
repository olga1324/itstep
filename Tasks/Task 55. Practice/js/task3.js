/*3.Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и 
выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное
 состояние.*/

let block = document.querySelector(".block");
let bl = document.querySelector(".bl");

block.addEventListener("mouseover",function(event){ // наводим мышку
    if (event.target.tagName == "DIV")
    event.target.style.opacity = 0.2;
})

block.addEventListener("mouseout", function (event) { // убираем мышку
    if (event.target.tagName == "DIV")
        event.target.style.opacity = 1;
})



