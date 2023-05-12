/*3. Дана кнопка (Показать) и text с текстом, который по-умолчанию скрыт. 
При нажатии на кнопку с надписью "Показать" отображать данный text и менять название кнопки
 на "Скрыть". При нажатии на кнопку с надписью "Показать" скрывать text и менять название 
 кнопки на "Показать".
*/

/*

    //записываем DOM элемент в переменную*
    btn = document.querySelector('.btn');

    //записываем DOM элемент в переменную*
    text = document.querySelector('.text');

    //событие клик по нашему DOM элементу*
    btn.onclick = function () {

        //элементу добавляем/удаляем класс (toggle)
        //есть ещё add/remove, но toggle делает проверку
        //если класса нет - добавляет, если есть - удаляет
        text.classList.toggle('open');
    }

}

*/


let button = document.querySelector(".btn");
let div = document.querySelector("div");


button.addEventListener("click", function(){
    if(div.classList.contains("open")){
        div.classList.remove("open");
        this.innerText = "Показать";
    } else {
        div.classList.add("open");
        this.innerText = "Скрыть";
    }
});