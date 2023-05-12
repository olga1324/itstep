function Add(){
    let food = document.getElementById("food").value;
    let weight = document.getElementById("weight").value;

    if( food && weight){
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let text1 = document.createTextNode(food);
        let text2 = document.createTextNode(weight);
        let text3 = document.createElement("button");
        let buttex1 = document.createTextNode("удалить");
        let atr1 = document.createAttribute("onclick");
        atr.value = "deleteRow(this)";
        text3.appendChild(buttex1);
        text3.setAttributeNode(atr1);
        let text4 = document.createElement("button");
        let buttex2 = document.createTextNode("удалить");
        let atr2 = document.createAttribute("onclick");
        atr2.value = "saveRow(this)";
        text4.appendChild(buttex2);
        text4.setAttributeNode(atr2);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td3.appendChild(text4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        let table = document.getElementById("table");

        table.appendChild(tr);

    }
}

function deleteRow(row){
    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}