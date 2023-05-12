/*1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на
 кнопку число увеличивалось на 1.*/
 
   let num = 0;
   document.getElementById("btn").onclick = function () {
   let p = document.querySelector("p");
   num++;
   p.innerHTML = num;
   }
