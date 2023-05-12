/*11. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, 
в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы 
(код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта 
предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить 
по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость
 продуктов, которая должна пересчитываться при добавлении, удалении и редактировании 
 продуктов.
 */

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let code = document.querySelector("#code").value;
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let number = document.querySelector("#number").value;

    let tdCode = document.createElement("td");
    tdCode.innerText = code;

    let tdName = document.createElement("td");
    tdName.innerText = name;

    let tdPrice = document.createElement("td");
    tdPrice.innerText = price;

    let tdNumber = document.createElement("td");
    tdNumber.innerText = number;
    

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let deleteButton = document.createElement("btn");
    deleteButton.innerText = "Удалить";
    deleteButton.classList.add("btnTab");
    td.insertAdjacentElement("beforeend", deleteButton);

    deleteButton.addEventListener("click", function () {
        this.closest("tr").remove();
    })

    let editButton = document.createElement("btn");
    editButton.innerText = "Редактировать";
    editButton.classList.add("btnTab")
    td.insertAdjacentElement("beforeend", editButton);


    tr.insertAdjacentElement("beforeend", tdCode);
    tr.insertAdjacentElement("beforeend", tdName);
    tr.insertAdjacentElement("beforeend", tdPrice);
    tr.insertAdjacentElement("beforeend", tdNumber);
    tr.insertAdjacentElement("beforeend", td);

    let tBody = document.querySelector("tbody");
    tBody.insertAdjacentElement("beforeend", tr);

    editButton.addEventListener("dblclick", function () {
        let editTr = document.querySelector(".edit-row");
        if (editTr) {
            editTr.classList.remove("edit-row");
        }
        this.closest("tr").classList.add("edit-row");

        document.querySelector(`[code="code"]`).value = this.closest("tr").children[0].innerText;
        document.querySelector(`[name="name"]`).value = this.closest("tr").children[1].innerText;
        document.querySelector(`[price="price"]`).value = this.closest("tr").children[2].innerText;
        document.querySelector(`[number="number"]`).value = this.closest("tr").children[3].innerText;

    })

})
