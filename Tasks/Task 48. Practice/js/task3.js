/*3. Дано 2 поля ввода, кнопка и div. При нажатии на 
кнопку выводить в div большее значение из 2 полей.*/

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let input1 = document.querySelector("#number1").value;
        let input2 = document.querySelector("#number2").value;
        let div = document.querySelector("div");

        if (input1 > input2) {
            
                div.innerText = input1
            }
            else {
                div.innerText = input2;
            }

    });
}
