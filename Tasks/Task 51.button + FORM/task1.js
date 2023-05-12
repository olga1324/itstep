const form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // отменяет стандартные действия браузера
    // <span class ="error-text"> Заполните поле</span>
    let errors = document.querySelectorAll(".error-text"); // находим все элементы с классом

    if (errors.length) { // если в input что-то есть
        Array.from(errors).forEach((errorSpan) => { // превращаем в массив и у каждого эл-та
            errorSpan.parentElement.classList.remove("error");// удаляем класс error
            errorSpan.remove();// удаляем класс <span></span>
        })
    }
    let hasError = false;

    let locality = document.getElementById("name");// создаем переменные с найденными значениями
    let region = document.getElementById("region");

    let arrayInput = [locality, region];
//создаем массив из эл-тов input

    arrayInput.forEach((type) => { // для каждого эл-та массива
        if (type.value == "") { // если поле не зеполнено
            let span = document.createElement("span"); // создаем span
            span.className = "error-text";// span.classList.add("error-text"); добавляем к span class "error=text"
            span.innerText = "заполните поле"; // со значением "заполните поле"
            field.insertAdjacentElement("afterend", span); //в input заносим span послеконца
            field.parentElement.classList.add("error"); // родителю input добавляем class "error"
            hasError = true;
        }
    });

    let typeLocality = ["city", "urban", "village", "agricultural-town"];
   //создаем массив из эл-тов input

    let checked = typeLocality.some(type => { // если что=то выбрано (some)
        return document.querySelector(`#${type}`).checked
        //возвращает то, что выбрано
        // document.querySelector("#"+radioId) - input
    });

    if (!checked) { // если не выбрано
        let span = document.createElement("span"); // создаем span и тд
        span.className = "error-text";
        span.innerText = "Выберите тип населенного пункта";
        document.querySelector(".form-control-radio").parentElement.insertAdjacentElement("beforeend", span);
        hasError = true
    }

    if (!hasError) { // если hasError  везде не true
        let locality = document.getElementById("name").value;
        let region = document.getElementById("region").value;
        let tr = document.createElement("tr"); // создаем шапку

        let tdLocality = document.createElement("td"); //1й столбец
        tdLocality.innerText = locality;

        let tdRegion = document.createElement("td"); //2й столбец
        tdRegion.innerText = `${region} район`;

        let tdTypeLocality = document.createElement("td"); //3й столбец
        let typeLocality = document.getElementsByName("type-locality");

        for (let element of typeLocality) { // для каждого элемента из ...
            if (element.checked) { // если эл-т выбран
                tdTypeLocality.innerText = `${element.value}`; // вывести значение выбранного пункта
            }
        }

        let tdAction = document.createElement("td"); //4й столбец

        // создаем кнопку редактировать
        let editButton = document.createElement("button");
        editButton.className = "custom-btn btn-4 btn-remove"
        editButton.innerText = "Редактировать";
        tdAction.insertAdjacentElement("beforeend", editButton);
 
         // создаем кнопку удалить
        let deleteButton = document.createElement("button");
        deleteButton.className = "custom-btn btn-4 btn-delete"
        deleteButton.innerText = "Удалить";
        tdAction.insertAdjacentElement("beforeend", deleteButton);
        
        // то, что удаляем
        tr.insertAdjacentElement("beforeend", tdLocality);
        tr.insertAdjacentElement("beforeend", tdRegion);
        tr.insertAdjacentElement("beforeend", tdTypeLocality);
        tr.insertAdjacentElement("beforeend", tdAction);

        let tbody = document.querySelector("tbody");
        tbody.insertAdjacentElement("beforeend", tr);

        deleteButton.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        })

        //создаем кнопку редактировать
        editButton.addEventListener("click", function () {
            let locality = this.closest("tr").firstElementChild.innerText;
            let region = this.closest("tr").firstElementChild.nextElementSibling.innerText;
            let typeLocality = document.getElementsByName("type-locality");
            let type = Array.from(typeLocality).forEach(item => {
                if (item.checked) {
                    typeValue = item.value;
                }
            })
            console.log(typeValue);

            document.getElementById("name").value = locality;
            document.getElementById("region").value = region;

            let editTr = document.querySelector(".edit");
            if (editTr) {
                editTr.closest("tr").classList.remove("edit"); 
                // после нахождения удаляем у строки класс edit
            }
            this.closest("tr").classList.add("edit");
        })
    }
})

//создаем кнопку сохранить . после нажатия данные перезаписываются в строку которая редактируется

let buttonSave = document.querySelector(".btn-save");

buttonSave.addEventListener("click", function () {
    let editTr = document.querySelector(".edit");
    if (editTr) {
        let locality = document.getElementById("name").value;
        let region = document.getElementById("region").value;

        editTr.firstElementChild.innerText = locality;
        editTr.children[1].innerText = region;
        editTr.classList.remove(".edit")
        document.querySelector("input").value = "";
    }
})
