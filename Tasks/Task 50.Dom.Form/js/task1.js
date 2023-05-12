// при нажатии кнопки отправить должна выводмться вся информация из формы
let form = document.getElementById("form"); // находим форму

form.addEventListener("submit", getFormValue); //добавляем обработчика событий .
// submit позволяет инициировать отправку формы из js
function getFormValue(event){
    event.preventDefault(); //отменяет действие по умолчанию

    let name = form.querySelector(`[name = "name"]`);
    let email = form.querySelector(`[email = "email"]`);
    let phone = form.querySelector(`[phone = "phone"]`);
    let educatioin = form.querySelector(`[educatioin = "education"]`);
    let sex= form.querySelector(`[sex = "sex"]`);
    let hobby = form.querySelector(`[hobby = "hobby"]`);
    let about = form.querySelector(`[about = "about"]`);

    let result = {
        name: name.value,
        email:email.value,
        phone:phone.value,
        educatioin:educatioin.value,
        sex: sex.radio,
        hobby: hobby.checked,
        about:about.value
    }
    return false
}
console.log(result);