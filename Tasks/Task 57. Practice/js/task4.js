/*4. Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. 
Если в поле ввода введен один символ, то при нажатии на кнопку неоходимо подсчитать - 
сколько раз этот символ стречается в тексте.
*/

document.querySelector("button").onclick = function(event){
    let str = this.value;
    if(str.length == 1){
        let text = document.querySelector("p").textContent;
        let count = text.split(str).length - 1;
        document.querySelector("div").innerHTML = count;
    } else {
        document.querySelector("div").innerHTML = "";
    }
}