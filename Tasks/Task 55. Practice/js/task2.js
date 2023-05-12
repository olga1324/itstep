/*2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход
 по адресу.*/

 document.getElementById("btn").onclick = function(event){
     event.preventDefault();
    let href = document.querySelectorAll("a").item(0).href;
    document.querySelectorAll("a").item(0).textContent = href;
}
