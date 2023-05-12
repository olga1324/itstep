/*3. Дана шахматная таблица 6х6 и 3 кнопки
    - при нажатии на первую кнопку на доску случайным образом должна помещаться 
    шашка в одну из клеток. Если шашка уже стоит, то она должна удалятся и ставится новая;
    - при нажатии на вторую кнопку черные клетки должны меняться на белые, а 
    белые - на черные;
    - при нажатии на третью кнопку доска должна поворачиваться на 90 градусов 
    (использовать CSS-анимацию)
*/

/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

//1
// создаем шахматное поле

let chess = "<table class='chess'>";

for (let i = 1; i <= 4; i++) {
    chess += "<tr>";
    for (let j = 1; j <= 4; j++) {
        if ((i + j) % 2 == 0) {
            chess += "<td class='black'></td>";
        }
        else {
           chess += "<td class='white'></td>";
        }
    }
    chess += "</tr>";
}

chess += "</table>";
document.write(chess);

let btn1 = document.querySelector(".first");

btn1.addEventListener("click", function (event) {
    let td = document.querySelectorAll("td");
    let checker = document.createElement("div");
    checker.classList.add("checker");
    
    td.forEach(item => {
        item.insertAdjacentElement("beforeend", checker);
        console.log(item)
    })

})

//2- при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;

let btn2 = document.querySelector(".second");

btn2.addEventListener("click", function (event) {
    let white = document.querySelectorAll(".white");
    let black = document.querySelectorAll(".black");
    white.forEach(item => {
        item.classList.remove("white")
        item.classList.add("black")
        console.log(item)
    })
    black.forEach(item => {
        item.classList.remove("black")
        item.classList.add("white")
        console.log(item)
    })
})


//3- при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)
let btn3 = document.querySelector(".third");

var rotate= 0;
document.querySelector(".third").onclick = function () {
    rotate+= 90;
    document.querySelector(".chess").style.transform = `rotate(${rotate}deg)`;
}
