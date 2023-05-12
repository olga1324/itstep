/*2. Дано поле ввода и абзац.
    - при наборе текста в input выводить текст в абзац;
    - запретить ввод пробела в поле ввода.
*/
document.addEventListener("keyup",function(event){ // при отпускании мышки
 event.preventDefault();

 document.addEventListener("keypress",function(event){ // пока мышка нажата
    if(event.key == " "){
        event.preventDefault();
    }
 })
 let input = document.querySelector("input").value; 
 let p = document.querySelector("p");
 p.innerText = input // в абзац выводится, то что мы набираем в поле ввода 
}

)
   