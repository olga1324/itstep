/*1. Имеется 1 поля ввода: первое - название еды, второе - вес. Также имеются 1 кнопки:
 Добавить и Сохранить. И еще есть пустая таблица следующего вида:
<table>
    <tr>
        <th>Название</th>
        <th>Вес</th>
        <th>Действия</th>
    </tr>
    <tr>
        <td>Сок</td>
        <td>100</td>
        <td>
            <button class="edit-button">Редактировать</button>
            <button class="delete-button">Удалить</button>
        </td>
    </tr>
</table> 

При нажатии кнопки "Добавить" в таблицу добавляется новая строка сло структурой аналогичной 
1 строке (сок).
При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы,
 а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, 
  которая редактируется. 
*/
  
//var 1

let newTab = document.createElement("table");

newTab.setAttribute("border", 1);
// 1я строка с 3мя ячейками
// верхушка
let newRow = newTab.insertRow(0);
let newCell = newRow.insertCell(0); // 1 ячейка
newCell.width = "100";
newCell.height = "30";
newCell.innerHTML = "название";

newCell = newRow.insertCell(1);  // 2 ячейка
newCell.width = "100";
newCell.height = "30";
newCell.innerHTML = "вес";

newCell = newRow.insertCell(2);  // 3 ячейка
newCell.width = "200";
newCell.height = "30";
newCell.innerHTML = "действия";


// 2я строка с 3мя ячейками 
// повторяющиеся строки по клику  кнопки добавить
let addButton = document.querySelector(".btn_add");
addButton.addEventListener("click", function () {
     // 2 строка
    newRow = newTab.insertRow(1);
    newCell = newRow.insertCell(0); // 1 ячейка
    newCell.width = "100";
    newCell.height = "30";
    newCell.innerHTML = "сок";

    newCell = newRow.insertCell(1); // 2 ячейка
    newCell.width = "100";
    newCell.height = "30";
    newCell.innerHTML = "200";

    newCell = newRow.insertCell(2); //3 ячейка
    newCell.width = "200";
    newCell.height = "30";

 // создаем кнопку редактировать
    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    newCell.insertAdjacentElement("beforeend", editButton);

// создаем кнопку удалить
    let deleteRow = document.createElement("button");
    deleteRow.innerText = "Удалить";
    newCell.insertAdjacentElement("beforeend", deleteRow);

});


