/*1. Дано поле ввода и кнопка. Вводится число. При нажатии на кнопку сгенерировать
 маркированный список из чисел от 1 до введенного.*/
 let button = document.querySelector(".btn_click");
 if (button) {
     button.addEventListener("click", function () {
 
         let input = document.querySelector("#number");
         let value = +input.value;
 
         let div = document.querySelector("div");
 
         if (div.children.length == 0) {
             let ul = document.createElement("ul");
 
             for (let i = 1; i <= value; i++) {
                 let li = document.createElement("li");
                 li.innerText = `пункт ${i}`;
                 ul.insertAdjacentElement("beforeend", li);
             }
             div.insertAdjacentElement("afterbegin", ul);
         }
 
     });
 }
 
 