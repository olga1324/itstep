/*5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, яввляется ли
 введеное значение числом.*/
document.getElementById("btn").onclick = function () {
    let input = document.querySelector("#number");
    let num = input.value
    let p = document.querySelector("p");
    if(Number.isFinite(+num)){
        p.innerText = `${num} число`
    }
    else
        p.innerText = `${num} не число`
}

