/*5. Дано 2 поля, кнопка и div. Вывести в div сумму,
 разность, произведение и частное 2 чисел, введеных
  в поля. При делении на ноль, вместо результата деления
   выводить текст "Деление на 0".*/

   let button = document.querySelector(".btn_click");
   if(button){
    button.addEventListener("click", function(){
        let input1 = document.querySelector("#number1");
        let input2 = document.querySelector("#number2");
        let a = +input1.value;
        let b = +input2.value;

        let div = document.querySelector("div");
        if(div.children.length == 0){
            let sum = a + b;
            let dif = a - b;
            let mult = a * b;
            let div = a / b;
            if( b === 0){
                result = "Деление на 0"
            }
            div.innerText = `сумма: ${sum}, разность: ${dif},произведение: ${mult},частное: ${div}`
        }
    })
   }