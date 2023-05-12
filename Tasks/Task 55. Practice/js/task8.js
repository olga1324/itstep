/*8. Дана шахматная таблица, 2 поля ввода, 2 радиокнопки с выбором цвета (белый и черный) и 
простая кнопка. При нажатии на кнопку в заданные координаты, которые введены в поля, должна 
ставится шашка выбранного цвета. Если там уже стоит шашка, то она должна удалятся и ставится
 новая.*/
 document.forms.chess.onsubmit = function(event){
    event.preventDefault();

    let form = new FormData(this);

    let x = +form.get("a");
    let y = +form.get("b");

    let color = form.get("color");

    let div = document.querySelector(`tr:nth-child(${x}) td:nth-child(${y}) div`);

    if(div)
        div.remove();

    div = document.createElement("div");
    div.classList.add(color);

    document.querySelector(`tr:nth-child(${x}) td:nth-child(${y})`).insertAdjacentElement("beforeend", div); //append - добавить в конец
}