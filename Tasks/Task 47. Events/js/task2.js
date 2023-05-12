/*2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при 
нажатии на кнопку текст выделялся полужирным шрифтом.*/
document.getElementById("btn").onclick = function () {
    let p = document.querySelector("p");
    p.outerHTML =`<b>${p.innerHTML}</b>`;
}


