let form = document.getElementById("reg_form"); // находим форму

form.addEventListener("submit", function (event) { //добавляем обработчика событий .
// submit позволяет инициировать отправку формы из js
    event.preventDefault(); //отменяет действие по умолчанию

    let div = document.querySelector(".result"); // вносим результат в div

    let name = document.querySelector("#name").value; //находим и вписываем в переменную значение name
    div.innerHTML = div.innerHTML + `Имя: ${name}<br>`; // вносим в div переменную

    let email = document.querySelector("#email").value;
    div.innerHTML = div.innerHTML + `Email: ${email}<br>`;

    let phone = document.querySelector("#phone").value;
    div.innerHTML = div.innerHTML + `Телефон: ${phone}<br>`;

    let education = document.querySelector("#education").value;
    div.innerHTML += `Образование: ${education}<br>`;

    let sex = document.getElementsByName("sex"); 
    for(let element of sex){ // эл-ты из класса
        if(element.checked){ // эл-т который выбран
            div.innerHTML += `Пол: ${element.value}<br>`; //вносим в результат
        }
    }
    
    let hobby = document.getElementsByName("hobby[]");
    Array.from(hobby).forEach(item => { // превращаем группу в массив
        if(item.checked){ // если выбран, вносим в результат
            div.innerHTML += `Хобби: ${item.value}<br>`;
        }
    })
    
    let about = document.getElementById("about").value;
    div.innerHTML += `О себе: ${about}<br>`;
})