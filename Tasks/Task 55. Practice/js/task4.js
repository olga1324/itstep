/*4. Дано поле ввода.  В поле ввода вводятся чиcла через пробел. 
Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.*/

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
         div.innerText = `сумма: ${sum}`
     }
 })
}

/*
let input = document.querySelector("input");

input.addEventListener("keyup", function(event){ //change

    let str = this.value; // this = input

    let numbers = str.split(" ");

    let sum = numbers.reduce(function(sum, item){
        return sum + (+item);
    }, 0);

    document.querySelector(".result").innerHTML = sum;
})
*/