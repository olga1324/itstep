/*1. Имеется 2 поля ввода: первое - название еды, второе - вес.Также имеются 2 кнопки:
 Добавить и Сохранить.И еще есть пустая таблица следующего вида:
<table>
    <tr>
        <th>Название</th>
        <th>Вес</th>
        <th>Действия</th>
    </tr>
    <tr>
        <td>Сок</td>
        <td>200</td>
        <td>
            <button class="edit-button">Редактировать<button>
                <button class="delete-button">Удалить<button>
                </td>
                </tr>
            </table>

                При нажатии кнопки "Добавить" в таблицу добавляется новая строка сло структурой аналогичной
                2 строке (сок).
                При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
                При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы,
                а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку,
                которая редактируется. 
*/



let buttonAdd = document.querySelector(".btn_add");
buttonAdd.addEventListener("click", function(){
    let food = document.querySelector("#food").value;
    let weight = document.querySelector("#weight").value;

    let tr = document.createElement("tr");
    
    let tdFood = document.createElement("td");
    tdFood.innerText = food;

    let tdWeight = document.createElement("td");
    tdWeight.innerText = weight;

    let tdAction = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    tdAction.insertAdjacentElement("beforeend", editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    tdAction.insertAdjacentElement("beforeend", deleteButton);

    tr.insertAdjacentElement("beforeend", tdFood);
    tr.insertAdjacentElement("beforeend", tdWeight);
    tr.insertAdjacentElement("beforeend", tdAction);

    let tbody = document.querySelector("tbody");
    tbody.insertAdjacentElement("beforeend", tr);

    deleteButton.addEventListener("click", function(){
        this.parentElement.parentElement.remove();
    });

//создаем кнопку редактировать

    editButton.addEventListener("click", function(){
        let food = this.parentElement.parentElement.firstElementChild.innerText;
        //ищем значения относительно кнопки редактировать.сохраняем данные в переменный
        //чтобы найти нужную строку присваиваем класс edit 

        let weight = this.closest("tr").children[1].innerText;

        document.querySelector("#food").value = food;
        document.querySelector("#weight").value = weight;
        let editTr = document.querySelector(".edit");
        if(editTr){
            editTr.classList.remove("edit"); // после нахождения удаляем у строки класс edit
        }
        this.parentElement.parentElement.classList.add("edit");
    })
});
//создаем кнопку сохранить . после нажатия данные перезаписываются в строку которая редактируется
let buttonSave = document.querySelector(".btn_save");
buttonSave.addEventListener("click", function(){
    let editTr = document.querySelector(".edit");
    if(editTr){
        let food = document.querySelector("#food").value;
        let weight = document.querySelector("#weight").value;

        editTr.firstChild.innerText = food;
        editTr.children[1].innerText = weight;

        editTr.classList.remove("edit");
    }
});