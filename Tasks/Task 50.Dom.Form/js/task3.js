let form = document.getElementById("reg_form");

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

    let nameInput = document.querySelector("#name"); // создаем переменные с найденными значениями
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let aboutInput = document.querySelector("#about");
    let educationInput = document.querySelector("#education");

    let fields = [nameInput, phoneInput, aboutInput, educationInput];
//создаем массив из эл-тов input

    fields.forEach((field) => { // для каждого эл-та массива
        if (field.value == "") { // если поле не зеполнено
            let span = document.createElement("span"); // создаем span
            span.className = "error-text";// span.classList.add("error-text"); добавляем к span class "error=text"
            span.innerText = "заполните поле"; // со значением "заполните поле"
            field.insertAdjacentElement("afterend", span); //в input заносим span послеконца
            field.parentElement.classList.add("error"); // родителю input добавляем class "error"
            hasError = true;
        }
    });

    let sex = ["sex-m", "sex-f"];

    let checked = sex.some((radioId) => { // если что=то выбрано (some)
        return document.querySelector("#" + radioId).checked; //возвращает то, что выбрано
        // document.querySelector("#"+radioId) - input
    })

    if (!checked) { // если не выбрано
        let span = document.createElement("span"); // создаем span и тд
        span.className = "error-text"; //span.classList.add("error-text");
        span.innerText = "выберите пол";
        document.querySelector("#sex-f").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    let hobbies = ["hobby-1", "hobby-2", "hobby-3"]; 
    // создаем массив

    checked = hobbies.some((checkboxId) => { // если что-то нажато
        return document.querySelector("#" + checkboxId).checked; // возвращет выбранное
        // document.querySelector("#"+checkbox) - input
    })

    if (!checked) { // если не нажат 
        let span = document.createElement("span"); // создаем span, class, text, впихиваем внутрь
        span.className = "error-text"; //span.classList.add("error-text");
        span.innerText = "выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if (!hasError) { // если hasError  везде не true
        let div = document.querySelector(".result"); // создаем div с результатами

        div.innerHTML += `Имя : ${nameInput.value}<br>`;
        div.innerHTML += `Email : ${emailInput.value}<br>`;
        div.innerHTML += `Телефон : ${phoneInput.value}<br>`;
        div.innerHTML += `Образование: ${educationInput.value}<br>`;
        if (document.querySelector("sex-m").checked) { // если выбран sex-m , выводим его
            div.innerHTML += `Пол: ${document.querySelector("sex-m").value}<br>`;
        }
        else if (document.querySelector("sex-f").checked) { // если выбран sex-f, выводим его
            div.innerHTML += `Пол: ${document.querySelector("sex-f").value}<br>`;
        }

        let hobbyValue = []; // создаем пустой массив куда помещаем выбранные пункты из хобби

        hobbies.forEach((hobby) => { // для каждого хобби 
            if (document.querySelector("#" + hobby).checked) { // если выбран пункт
                hobbyValue.push(document.querySelector("#" + hobby).value); // добавляем в массив 
            }
        })
        div.innerHTML += `Хобби: ${hobbyValue.join(",")}<br>`; // в результат помещаем хобби
        div.innerHTML += `О себе : ${aboutInput.value}<br>`; // в результат помещаем о себе
        this.reset(); // очищение формы this == form
    }
})