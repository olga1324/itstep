/*2. Дана форма с одним полем ввода.
    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
    - при убирании курсора из поля возвращать фон в начальное состояние.
*/

let input = document.getElementById("area");

input.addEventListener("focus", function (event) {
    this.style.backgroundColor = "#3333ce";
});

input.addEventListener("blur", function () {
    this.style.backgroundColor = "#fff"
})