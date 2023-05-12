let form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    //отменяет перезагрузку страницы, и отменяет все стандартные настройки браузера 

    let div = document.querySelector(".result");

    //находим Имя 
    let name = document.querySelector("#name").value;//изымаем введенное значение в Имя
    div.innerHTML += `Имя:${name}<br>`;//вставляем то, что изъяли в наш innerHTML

    //находим email
    let email = document.querySelector("#email").value;//изымаем введенное значение в email
    div.innerHTML += `Email:${email}<br>`;//вставляем то, что изъяли в наш innerHTML

    //находим phone
    let phone = document.querySelector("#phone").value;
    div.innerHTML += `Телефон:${phone}<br>`;

    //находим education
    let education = document.querySelector("#education").value;
    div.innerHTML += `Образование:${education}<br>`;

    //определяем  мужской пол 
    let sexM = document.querySelector("#sex-m");
    if (sexM.checked) {
        div.innerHTML += `Пол:${sexM.value}<br>`;
    }
    //определяем  женский пол 
    let sexF = document.querySelector("#sex-f");
    if (sexF.checked) {
        div.innerHTML += `Пол:${sexF.value}<br>`;
    }

    //находим hobby1
    let hobby1 = document.querySelector("#hobby-1");
    if (hobby1.checked) {
        div.innerHTML += `Хобби:${hobby1.value}<br>`;
    }
    //находим hobby2
    let hobby2 = document.querySelector("#hobby-2");
    if (hobby2.checked) {
        div.innerHTML += `Хобби:${hobby2.value}<br>`;
    }
    //находим hobby3
    let hobby3 = document.querySelector("#hobby-3");
    if (hobby3.checked) {
        div.innerHTML += `Хобби:${hobby3.value}<br>`;
    }

    //находим о себе
    let about = document.querySelector("#about").value;
    div.innerHTML += `О себе:${about}<br>`;


    //проверка значений (введены данные или нет)

    let a = "", divCreate;//проверять будем на пустую строку a, и создание div

    //name (проверка на пустую строку)
    let nameId;
    if (name == a) {//ели пустая строка или по-другому не введены данные 
        nameId = document.querySelector("#name");//ищем input  по id=name
        if (nameId.parentElement.children.length < 2) {
            //nameId, взять его родителя и у него проверить детей и если он один 
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Введите имя";// присваиваем div текст "Введите имя"
            nameId.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в nameId
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#name").nextSibling) {
        //ищем input  по id=name и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#name").nextSibling.remove(); //то удаляем divCreate
    }

    //email (проверка на пустую строку)
    let emailId;
    if (email == a) {//ели пустая строка или по-другому не введены данные 
        emailId = document.querySelector("#email");//ищем input  по id=email
        if (emailId.parentElement.children.length < 2) {
            //emailId, взять его родителя и у него проверить детей и если он один 
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Укажите email ";// присваиваем div текст "Укажите email"
            emailId.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в emailId
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#email").nextSibling) {
        //ищем input  по id=email и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#email").nextSibling.remove();//то удаляем divCreate
    }

    //phone (проверка на пустую строку)
    let phoneId;
    if (phone == a) {//ели пустая строка или по-другому не введены данные 
        phoneId = document.querySelector("#phone");//ищем input  по id=phone
        if (phoneId.parentElement.children.length < 2) {
            //phoneId, взять его родителя и у него проверить детей и если он один 
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Укажите номер телефона";
            // присваиваем div текст "Укажите номер телефона"
            phoneId.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в phoneId
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#phone").nextSibling) {
        //ищем input  по id=phone и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#phone").nextSibling.remove();//то удаляем divCreate
    }

    //education (проверка на пустую строку)
    let educationId;
    if (education == a) {//ели пустая строка или по-другому не введены данные 
        educationId = document.querySelector("#education");//ищем input  по id=education
        if (educationId.parentElement.children.length < 2) {
            //educationId, взять его родителя и у него проверить детей и если он один 
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Образование не выбрано";
            // присваиваем div текст "Образование не выбрано"
            educationId.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в educationId
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#education").nextSibling) {
        //ищем input  по id=education и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#education").nextSibling.remove();//то удаляем divCreate
    }

    //about "О себе"   (проверка на пустую строку)
    let aboutId;
    if (about == a) {//ели пустая строка или по-другому не введены данные 
        aboutId = document.querySelector("#about");//ищем input  по id=about
        if (aboutId.parentElement.children.length < 2) {
            //aboutId, взять его родителя и у него проверить детей и если он один 
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Заполните информацию о себе ";
            // присваиваем div текст "Заполните информацию о себе "
            aboutId.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в aboutId
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#about").nextSibling) {
        //ищем input  по id=about и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#about").nextSibling.remove();//то удаляем divCreate
    }

    //sex "выбрать пол "   (проверка на checked)
    let sexFid;
    if (!sexF.checked && !sexM.checked) {//ели пустая строка или по-другому не введены данные 
        sexFid = document.querySelector("#sex-f");//ищем input  по id=sex-f
        if (sexFid.parentElement.parentElement.children.length < 3) {
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Выберете пол";// присваиваем div текст "Выберете пол"
            sexFid.parentElement.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в sexFid
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#sex-f").parentElement.parentElement.children.length > 2) {
        //ищем input  по id=sex-f и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#sex-f").parentElement.nextSibling.remove();//то удаляем divCreate
    }


    //Хобби "Выбрать хобби "   (проверка на checked)
    let hobby3id;
    if (!hobby1.checked && !hobby2.checked && !hobby3.checked) {
        //ели пустая строка или по-другому не введены данные 
        hobby3id = document.querySelector("#hobby-3");//ищем input  по id=hobby-3

        if (hobby3id.parentElement.parentElement.children.length < 4) {
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Укажите хобби";// присваиваем div текст "Укажите хобби"
            hobby3id.parentElement.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в hobby3id
            divCreate.classList.add("error-text");
        }
    } else if (document.querySelector("#hobby-3").parentElement.parentElement.children.length > 3) {
        //ищем input  по id=hobby-3 и если у него есть сосед (наш созданный divCreate )
        document.querySelector("#hobby-3").parentElement.nextSibling.remove();
        //то удаляем divCreate
    }

    // проверка на загружен ли файл или нет 
    let file = document.querySelector("#file");
    document.getElementById('file').addEventListener('change', function () {
        if (this.value) {
            if (document.querySelector("#file").parentElement.children.length > 1) {
                document.querySelector("#file").nextSibling.remove();//то удаляем divCreate  
            }
        } else { // Если после выбранного ещё раз еще раз, но дальше cancel
            if (document.querySelector("#file").parentElement.children.length < 2) {
                divCreate = document.createElement("div");//создаём div
                divCreate.innerText = "Пусто. Попробуйте ещё раз загрузить файл";
                // присваиваем div текст "Пусто"
                file.parentElement.insertAdjacentElement("beforeend", divCreate);
                //ставим наш созданный divCreate согласна положения "beforeend" в filess
                divCreate.classList.add("error-text");
            }
        }
    })
    if (!file.value) {
        if (document.querySelector("#file").parentElement.children.length == 1) {
            divCreate = document.createElement("div");//создаём div
            divCreate.innerText = "Файл пропущен, загрузите файл";// присваиваем div текст "Пусто"
            file.parentElement.insertAdjacentElement("beforeend", divCreate);
            //ставим наш созданный divCreate согласна положения "beforeend" в filess
            divCreate.classList.add("error-text");
        }
    }
})