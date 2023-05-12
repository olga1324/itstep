/*6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее
 адрес.*/
document.getElementById("btn").onclick = function(){
    let href = document.querySelectorAll("a").item(0).href;
    document.querySelectorAll("a").item(0).textContent = href;
}
