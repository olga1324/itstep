/*5. Реализовать экранную клавиатуру для русского алфавита: 33 клавиши с названием букв. 
При нажатии на опредленную клавишу выводить соотвествующий символ в какой-либо div.
*/

let key = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

for (let letter of key) {
    letter.onclick = function () {
        display.textContent += letter.textContent;
    }
}

clear.onclick = function (event) {
    event.preventDefault();
    display.textContent = '';
}

/* or
document.querySelector("div").onclick = function(e){

    let button = e.target;

    if(button.tagName != "BUTTON"){
        return false;
    }
        
    let p = document.querySelector("p");

    p.innerHTML += button.innerText;
    

}

*/
