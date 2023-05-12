/*Все необходимые элементы находятся в index.html
https://developer.mozilla.org/ru/docs/Web/API/Element
Свойства: classList, cssText, tagName, firstElementChild, lastElementChild, children,
previousElementSibling, nextElementSibling, parentElement, parentNode.
Методы: createElement, appendChild, insertBefore, insertAdjacentHTML.*/

//1. Элемент: #first - element. 

let element = document.getElementById("first-element"); // можно вызвать э-т, если есть атр-т id

//- Добавьте ему класс www.
if (element){
    element.classList.add("www");
    console.log(element.className);
}

//- Удалите у него класс www.
element = document.getElementById("first-element");
element.classList.remove("www");
console.log(element.className);

// Проверьте наличие у него класса www.
console.log(element.classList.contains("www"));

//- Добавьте ему класс www, если его нет и удалите - если есть.
element = document.getElementById("first-element");
element.classList.toggle("www");
console.log(element.className);

//- Узнайте количество его классов.
let countClass = element.classList.length
console.log(countClass);

//- Выведите последовательно через console.log его классы.
for (let item of element.classList){
    console.log(item);
}

//- Сделайте его красного цвета, размером 30px, добавьте ему границу
element.style.color = "#f00";
element.style.fontSize = "30px";
element.style.border = "1px solid #000";

//- Выведите название его тега в нижнем регистре
let lowerCase = element.tagName;
console.log(lowerCase.toLowerCase());

//- Вставьте ему в конец span с текстом 'мой любимый спан'
let span = document.createElement("span");
span.innerHTML = "мой любимый спан";
element.append(span);
console.log(span);

//- Вставьте ему в конец список ul с элементами массива[createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
// вставка строкой
let list = ["createElement", "appendChild", "insertBefore"];
let out = "<ul>";
list.forEach(function(item){
    out += `<li>${item}</li>`;
});
out += "</ul>";

firstElement.insertAdjacentHTML("beforeend", out);

//- Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
    // вставка объектом
    let div = document.createElement("div");
    div.classList.add("neighbor");
    div.innerText = "еще один сосед";

    firstElement.insertAdjacentElement("beforebegin", div);

//or

let firstElement = document.querySelector("#first-element");
// firstElement = document.getElementById("first-element"); - альтернатива поиска по ID
if(firstElement){
    firstElement.classList.add("www");
    firstElement.classList.remove("www");
    if(firstElement.classList.contains("www")){
        console.log("Есть класс www")
    } else {
        console.log("Нету класса www")
    }
    firstElement.classList.toggle("www");

    console.log(firstElement.classList.length);

    for(let i = 0; i < firstElement.classList.length; i++){
        console.log(firstElement.classList.item(i));
    }
    // аналог
    for (const item of firstElement.classList) {
        console.log(item);
    }

    firstElement.style.color = "#f00";
    firstElement.style.fontSize = "30px";
    firstElement.style.border = "1px solid #000";

    console.log(firstElement.tagName.toLowerCase());

    firstElement.insertAdjacentHTML("beforeend", "<span>мой любимый спан</span>");
    // вставка строкой
    let list = ["createElement", "appendChild", "insertBefore"];
    let out = "<ul>";
    list.forEach(function(item){
        out += `<li>${item}</li>`;
    });
    out += "</ul>";

    firstElement.insertAdjacentHTML("beforeend", out);
    
    // вставка объектом
    let div = document.createElement("div");
    div.classList.add("neighbor");
    div.innerText = "еще один сосед";

    firstElement.insertAdjacentElement("beforebegin", div); //добавляет переданный э-т в дом-дерево относительно эл-та вызвавшего метод
}

// 2. Элемент: #second-element.

let secondElement = document.getElementById("second-element");

//ставьте ему в начало span с текстом '!!!'.
let span2 = document.createElement("span");
span2.innerHTML = "!!!";
secondElement.prepend(span2);
console.log(span2);

// - Вставьте перед ним span с текстом '!!!'.
let span3 = document.createElement("span");
span3.innerHTML = "!!!";
secondElement.append(span3);
console.log(span3);

// - Вставьте после него span с текстом '!!!'.
let span4 = document.createElement("span");
span4.innerHTML = "!!!";
secondElement.before(span4);
console.log(span4);

// - Вставьте ему в конец span с текстом '!!!'.
let span5 = document.createElement("span");
span5.innerHTML = "!!!";
secondElement.after(span5);
console.log(span5);

//or

secondElement = document.querySelector("#second-element");

if(secondElement){
    let span = "<span>!!!</span>";
    secondElement.insertAdjacentHTML("afterbegin", span);
    secondElement.insertAdjacentHTML("afterend", span);
    secondElement.insertAdjacentHTML("beforebegin", span);
    secondElement.insertAdjacentHTML("beforeend", span);
}

/*3. Элемент: #third-element.
- Найдите первого потомка этого элемента и сделайте его текст красного цвета.
 - Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
- Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
*/

let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    if(thirdElement.firstElementChild){
        thirdElement.firstElementChild.style.color = "#f00";
    }

    if(thirdElement.lastElementChild){
        thirdElement.lastElementChild.style.color = "#f00";
    }

    Array.from(thirdElement.children).forEach(function(element){
        element.insertAdjacentText("beforeend", "!");
    });
}

/*4. Элемент: #fourth - element
- Найдите его соседа сверху и добавьте ему в конец текст '!'.
- Найдите его соседа снизу и добавьте ему в конец текст '!'.
- Найдите его соседа снизу его соседа снизу(следующий элемент за соседним) и добавьте ему в конец текст '!'. 
*/

let fourthElement = document.querySelector("#fourth-element");
if(fourthElement){
    if(fourthElement.previousElementSibling){
        fourthElement.previousElementSibling.insertAdjacentText("beforeend", "!");
    }

    if(fourthElement.nextElementSibling){
        fourthElement.nextElementSibling.insertAdjacentText("beforeend", "!");
    }
    if(fourthElement.nextElementSibling.nextElementSibling){
        fourthElement.nextElementSibling.nextElementSibling.insertAdjacentText("beforeend", "!");
    }
}

/*5. Элемент: #fifth - element
- Найдите его родителя и покрасьте его в синий цвет.
 - Найдите родителя его родителя и покрасьте его в желтый цвет.
*/

let fifthElement = document.querySelector("#fifth-element");
if(fifthElement){
    if(fifthElement.parentElement){
        fifthElement.parentElement.style.color = "#00f";
    }
    if(fifthElement.parentElement.parentElement){
        fifthElement.parentElement.parentElement.style.color = "#ff0";
    }
}