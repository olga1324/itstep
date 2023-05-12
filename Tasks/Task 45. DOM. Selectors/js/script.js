/*Все необходимые элементы находятся в index.html
https://developer.mozilla.org/ru/docs/Web/API/Element

1. Элемент: #first-element. 
*/

let firstElement = document.querySelector("#first-element"); // вернет первое вхождение эл-та кот. соотв. указанному тэгу. если нет - null
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor"); // получает все э-ты страницы

//- поменяйте "Я сосед" на "Я хороший сосед"
if(neighbors.length){ //проверяем наличие элементов через длину
    Array.from(neighbors).forEach(function(element){ // одноразовое, не меняет сам список на массив
        element.innerHTML = "Я хороший сосед"; // содержимое эл-та кот. хранится в виде строки. позволяет менять содержимое
    });


    //- добавить к каждому соседу его номер, например, "Я хороший сосед №2"
    Array.from(neighbors).forEach(function (element,index) {
        element.innerHTML = `Я хороший сосед №${index + 1}`; // обращаемся к каждому индексу. счет от 0
    });


    //- оберните текст в элементах с классом "neighbor" в тег span
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });

    //- замените теги span на тег b
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = `<b>${element.innerText}</b>`;
    });
}


//- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");
if(lastNeighbor){
    if(lastNeighbor.firstElementChild){
        lastNeighbor.firstElementChild.innerHTML = "я последний хороший сосед";
    }
}


/*2. Элемент: #second-element.
*/

let secondElement = document.getElementById("second-element"); // находим эл-т по id

//- добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
let ul = document.createElement("ul"); // создает новый э-т 

for(let i = 1; i <=10; i++){
    let li = document.createElement("li");
    li.innerHTML = `пункт ${i}`; // меняем содержимое
    ul.appendChild(li); // вставляем узел в конец эл-та
}

secondElement.appendChild(ul);


//- каждый четный пункт покрасить в красный цвет

let even = document.querySelectorAll("#second-element ul li:nth-child(2n)");
even.forEach(function(item){
    item.style.color ="#f00"
})

even = secondElement.getElementsByTagName("li"); // ищет эл-ты с данным тегом и возвращает их коллекцию
for(let i = 0; i < even.length; i++){
    if(i %2 == 1){
        even.item(i).getElementsByClassName.color = "red"; // ищет эл-ты с данным классом
    }
}


//- каждому нечетному пункту добавить класс odd-eleme)nt

let oddElement = document.querySelectorAll("#second-element ul li:nth-child(2n+1)");
oddElement.forEach(function(item){
    item.classList.add("odd-element"); // возвр. псевдомассив содер. все классы эл-та.  add  добавляет указанные классы
})


//- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

let element3 = document.querySelectorAll("#second-element ul li:nth-child(3n)");
element3.forEach(function(item){
    if (item.classList.contains("odd-element")){ // проверяет есть ли данный класс у элемента
        item.style.fontSize = "28px";
    }
})

/*
3. Элемент: #third-element.
*/

let thirdElement = document.getElementById("third-element");


//- заменить теги b на strong
let bTag = thirdElement.getElementsByTagName("b");

for(let i = 0; i < bTag.length; i++){
    bTag.item(0).outerHTML = `<strong>${bTag.item(0).innerHTML}</strong>`// создаем новый html на месте эл-та. не меняет
}


//- удалить в тегах strong все теги, т.е. должен остаться только текст
let strong = thirdElement.getElementsByTagName("strong");

for (let i = 0; i < strong.length; i++){
    let tag = strong.item(i);
    let del = "";
    for(let j = 0; j < tag.childNodes.length; j++){ // возвр. дочерние узлы
        del += tag.childNodes.item(j).textContent; //задает  или получат текстовое содержимое эл-та и потомков
    }
    tag.innerHTML = del;
}


//- обернуть каждое слово в тег span 
for(let i = 0; i < strong.length; i++){
    let words = strong.item(i).textContent.split(" ");
    strong.item(i).innerHTML = "";
   words.forEach(function(word){
    let span = document.createElement("span")// создаем новый эл-т
    span.textContent = word;
    strong.item(i).appendChild(span);
   });
}

/*4. Элемент: #fourth-element
*/

let fourthElement = document.getElementById("fourth-element");

//- Выведите на экран текст из всех тегов div
let div = fourthElement.parentElement.getElementsByTagName("div");

for(let i = 0; i < div.length; i++){
    console.log(div.item(i).textContent);
}


//- Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст

let text = [];
for(let i = 0; i < div.length; i++){
    text.push(div.item(i).textContent);
}
text.reverse();
for (let i = 0; i < div.length; i++) {
   div.item(i).textContent = text[i];
}

//- удалить третьего "соседа"
div.item(1).remove();

//- добавить "пятого" соседа после четвертого
div.item(0).insertAdjacentHTML("afterend","<div>я пятый сосед</div>");

//- пятому соседу добавить границу, внутренние отступы и фон*/
div.item(1).style.border = "1px solid #000";
div.item(1).style.padding = "10px";
div.item(1).style.backgroundClolr = "#f00";
div.item(1).setAttribute("id","first"); // задает значение атрибута. если есть - обновляется, если нет - добавляется новый с указанным именем и значением. получить атрибут - get, удалить - remove

/*5. Элемент: #fifth-element
*/

let fifthElement = document.getElementById("fifth-element");

//- Добавить 2 div до элемента с текстом "1" и "2", и 2 div после элемента с текстом "3" и "4"

if(fifthElement){
    fifthElement.insertAdjacentHTML("beforebegin", "<div>1</div> <div>2</div>");
    fifthElement.insertAdjacentHTML("afterend", "<div>3</div> <div>4</div>");
}

/*- В первый div с текстом "1" добавить нумерованный список с 7 элементами с днями недели.
 Субботу и воскресение покрасить в красный цвет*/

let div1 = fifthElement.parentElement.firstElementChild;
let ol = document.createElement("ol");
div1.insertAdjacentElement("beforeend", ol);

let week = ["воскресенье","понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

for(let i = 0; i < week.length; i++){
    let li = document.createElement("li");
    li.innerHTML = week[i];
    ol.insertAdjacentElement("beforeend",li)
}
div1.firstElementChild.firstElementChild.style.color = "#f00";
div1.firstElementChild.lastElementChild.style.color = "#f00";


/*- В div с текстом "2" вставить 2 span с произвольным текстом.
 В конец каждого span добавить в скобочках длину (в символах) содержимого span.*/

let div2 = fifthElement.previousSibling;

if(div2){
    div2.insertAdjacentHTML("beforeend", "<span>Тут должен быть произвольный текст</span>");
    div2.insertAdjacentHTML("beforeend", "<span>Всё ещё произвольный текст</span>");

    let span1 = div2.firstElementChild;
    let span2 = div2.lastElementChild;

    let lengthSpan1 = span1.innerHTML.length;
    let lengthSpan2 = span2.innerHTML.length;
    span1.insertAdjacentHTML("beforeend", `(${lengthSpan1})`)
    span2.insertAdjacentHTML("beforeend", `(${lengthSpan2})`)
}


//-div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.

let div3 = fifthElement.nextElementSibling;


//- div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".

let div4 = fifthElement.parentElement.lastElementChild;

if(div4){
    let article = document.createElement("article");
}