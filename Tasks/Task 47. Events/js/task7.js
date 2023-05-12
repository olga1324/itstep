/*7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля
 ввода.*/
 document.getElementById("btn").onclick = function(){
    let str = document.querySelector("input").value;
    let newStr = str.split("").filter(function(item){
        return isNaN(+item) == true;
        }).join("");

        document.querySelector("input").value = newStr;
 }
