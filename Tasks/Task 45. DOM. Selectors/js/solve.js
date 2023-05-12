//let neighbors = document.querySelectorAll(".first-section .neighbor");

let firstElement = document.querySelector("#first-element"); // вернет первое вхождение
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");// получаем все элементы страницы
if(neighbors.length){ // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function(element){
        element.innerHTML = "Я хороший сосед";// содержимое эл-та хранится в виде строки. позволяет менять содеримое 
    });

    Array.from(neighbors).forEach(function(element, index){
        element.innerHTML = `Я хороший сосед №${index+1}`; // обращаемся к каждому эл-ту . счет начинается с 0
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<span>${element.innerHTML}</span>`;// обораяиваем в тэг спан
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<b>${element.innerText}</b>`; // заменяем спан на б
    });
}
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor"); // обращаемся к родительскому эл-ту. ищем четвертого соседа
if(lastNeighbor){
    if(lastNeighbor.firstElementChild){
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед"; // меняем содержимое
    }
}

//2

let secondElement = document.querySelector("#second-element"); // ищем второй эл-т
if(secondElement){
    /*let out = "<ul>";
    for(let i = 1; i <= 10; i++){
        out += `<li>Пункт ${i}</li>`;
    }
    out += "</ul>";
    secondElement.insertAdjacentHTML("afterbegin", out);*/

    let ul = document.createElement("ul");// создаем новый эл- т
    secondElement.insertAdjacentElement("afterbegin", ul);// добавляесм ul после начала
    for(let i = 1; i <= 10; i++){
        let li = document.createElement("li"); // создаем эл-т li
        li.innerHTML = `Пункт ${i}`; // наполняем содержимым
        ul.insertAdjacentElement("beforeend", li); // добавляем li перед концом
    }

    let evenElements = ul.querySelectorAll("li:nth-child(2n)"); // ul.querySelectorAll("li:nth-child(even)"); находим каждый четный
    if(evenElements.length){
        Array.from(evenElements).forEach(function(item){
            item.style.color = "#f00"; // красим в красный
        });
    }

    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)"); // ищем каждый 3
    if(oddElements.length){
        Array.from(oddElements).forEach((item) => {
            item.classList.add("odd-element"); // возвращаем псевдомассив сод. все классфы ээл-та
        })
    }

    let elements = ul.querySelectorAll("li:nth-child(3n)"); // эл-ты кратные 3
    if(elements.length){
        Array.from(elements).forEach((item) => {
            if(item.classList.contains("odd-element")){ // проверяем есть ли данный класс у элемента
                let styles = getComputedStyle(item);// обращаемся ко всем стилям. нельзя напрям ую обратитсяя к css
                let fontSize = parseInt(styles.fontSize, 10); // анализирует строку и возвращает целое число
                item.style.fontSize = `${fontSize*2}px`;
            }
        })
    }
}

//3

let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    let bs = thirdElement.querySelectorAll("b"); // находим все тэги б
    if(bs.length){
        Array.from(bs).forEach((item) => {
            item.outerHTML = `<strong>${item.innerHTML}</strong>`;// создаем новый html на ме6сте эл-та . не меняет
        });
    }

    let strongs = thirdElement.querySelectorAll("strong"); 
    if(strongs.length){
        Array.from(strongs).forEach((item) => {
            item.innerHTML = item.innerText; // показывает все текстовое содержимое кот. не относится к html. игнарирует внутренние теги
        });

        Array.from(strongs).forEach((item) => {
            let words = item.innerText.split(" "); // разделяем строку пробелами
        
            let newInnerHTML = words.map((word) => { // создаем новый массив
                return `<span>${word}</span>`
            }).join(" ");

            item.innerHTML = newInnerHTML;
        });
    }
}

//4

let fourthElement = document.querySelector("#fourth-element");
if(fourthElement){
    if(fourthElement.parentElement){ // обращаемся к родителю
        let divs = fourthElement.parentElement.querySelectorAll("div");// ищем у родителя все div 
        if(divs.length){
            Array.from(divs).forEach((div) => {
                console.log(div.innerHTML);
            });

            let reverseDivs = []; // создаем массив
            Array.from(divs).forEach((item) => {
                reverseDivs.unshift(item.innerHTML); // добавляет эл-ты в начало массива . reverde переворачивает массив
            });

            Array.from(divs).forEach((div, index) => {
                div.innerHTML = reverseDivs[index]; 
            })

            divs[1].remove(); // удаляем дивы
            
            // аналог
            //fourthElement.parentElement.firstElementChild.nextElementSibling.remove();
            let fifthNeighbor = document.createElement("div"); // создаем новый эл-т
            fifthNeighbor.classList.add("neighbor");// проверяет есть ли данный класс у элемента. если нет, создаем
            fifthNeighbor.classList.add("fifth-neighbor");
            fifthNeighbor.innerHTML = "Я пятый сосед"; // наполняем
            divs[0].insertAdjacentElement("afterend", fifthNeighbor); // divs[0] = fourthElement.parentElement.firstElementChild . добавляем перед концом
            fifthNeighbor.style.border = "1px solid #000";// создаем границу
            fifthNeighbor.style.padding = "10px"; // создаем паддинг
            fifthNeighbor.style.backgroundColor = "#ff0";// красим фон
        }
    }
}