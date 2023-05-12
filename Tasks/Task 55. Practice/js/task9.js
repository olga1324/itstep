/*9. Дан абзац с текстом и кнопка "Редактировать". При нажатии на кнопку должно появлятся
 поле ввода, абзац должен скрываться,а в поле ввода должен быть текст из абзаца, кнопка
  "Редактировать" должна изменить текст на "Сохранить". После изменения текста и нажатии
   на кнопку "Сохранить" у нас должен оставаться только абзац с новым текстом и кнопкой 
   "Редактировать".*/

   let button = document.querySelector("button");

button.addEventListener("click", function(){

    if(this.classList.contains("btn-edit")){ // создаем кнопку редактировать

        let text = document.querySelector("p").innerText;

        let input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.name = "text";

        document.querySelector("div").insertAdjacentElement("afterbegin",input);
        document.querySelector("p").style.display = "none";
        this.innerText = "Сохранить";
        this.classList.remove("btn-edit"); // удаляем кнопку редактировать
        this.classList.add("btn-save"); // добавляем кнопку сохранить

    } else if(this.classList.contains("btn-save")){ // создаем кнопку сохранить

        let text = document.querySelector("input").value;
        document.querySelector("p").innerText = text;

        document.querySelector("input").remove();
        document.querySelector("p").style.display = "block";
        this.innerText = "Редактировать";
        this.classList.remove("btn-save"); // удаляем кнопку сохранить
        this.classList.add("btn-edit"); // добавляем кнопку редактировать

    }

})