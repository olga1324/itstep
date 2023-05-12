/*5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат 
выбранной операции над 2 числами, когда выбирается сама операция. В случае неккоретного
 ввода чисел предусмотреть вывод сообщения об этом вместо результата.
 */

let radios = document.querySelectorAll("input[name='operation']");

for(let i = 0; i < radios.length; i++){
    radios[i].onchange = function(){

        let numberA = +a.value;
        let numberB = +b.value;
        
        let o = this.value;
        let result;
        
        switch(o){
            case "+":
                result = numberA+numberB; break;
            case "-":
                result = numberA-numberB; break;    
            case "*":
                result = numberA*numberB; break;
            case "/":
                result = numberA/numberB; break; 
        }
    
        document.querySelector("p").innerHTML = result;
    }
}
