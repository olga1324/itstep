/* <article class="news__item">
    <a href="/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/">
        <div class="news__img">
            <img src="/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp" alt="We offer a new fertilizer – potassium salt 60% NOD">
                <time>06.01.2023</time>
        </div>
        <div class="news__desciption">
            <div class="news__title">
                <h4>We offer a new fertilizer – potassium salt 60% NOD</h4>
            </div>
            <div class="news__text">
                <p>We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.</p>
            </div>
            <div class="news__more">
                <span>more</span>
            </div>
        </div>
    </a>
</article>
    */

let body = document.body;
let article = document.createElement("article");
if (article) {
    body.prepend(article);
    article.classList.add("news__item");

    article.innerHTML = `<a href="/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/">`;

    let divNews = document.createElement("div");

    let a = article.querySelector("a");
    a.insertAdjacentElement("afterbegin", divNews);
    divNews.classList.add("news__img");

    divNews.innerHTML = `<img src="/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp" alt="We offer a new fertilizer – potassium salt 60% NOD">
                <time>06.01.2023</time>`;

    let divdesciption = document.createElement("div");
    a.insertAdjacentElement("beforeend", divdesciption);
    divdesciption.classList.add("news__desciption");

    let divTitle = document.createElement("div");
    divdesciption.insertAdjacentElement("afterbegin", divTitle);
    divTitle.classList.add("news__title");

    let h4 = document.createElement("h4");
    h4.innerHTML = "We offer a new fertilizer – potassium salt 60% NOD";
    divTitle.insertAdjacentElement("beforeend", h4);

    let divText = document.createElement("div");
    divText.classList.add("news__text");
    divdesciption.insertAdjacentElement("beforeend", divText);

    let p = document.createElement("p");
    p.innerText = "We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD."
    divText.insertAdjacentElement("afterbegin", p);

    let divMore = document.createElement("div");
    divMore.classList.add("news__more");
    divdesciption.insertAdjacentElement("beforeend", divMore);

    let span = document.createElement("span");
    span.innerHTML = "more";
    divMore.insertAdjacentElement("beforeend", span);
}

/*
Замечание. В последующих заданиях все созданные переменные использовать нельзя, 
то есть все элементы нужно получать заного через запросы.
*/

// 2.   Удалить из полученного кода все тег span, но оставить его содержимое.

let deliteSpan = document.querySelectorAll("span");
if (deliteSpan.length) {
    Array.from(deliteSpan).forEach(item => {
        item.outerHTML = item.innerText;
    })

// 3.   Времени добавить  красный фон, белый цвет и внутренние отступы в 25px для даты.

    let time = document.querySelector("time");
    time.style.color = "#fff"
    time.style.backgroundColor = "#f00";
    time.style.padding = "25px";
}

//4.   Увеличить шрифт заголовка на 2px.

let title = document.querySelectorAll("h4");
if (title.length) {
    Array.from(title).forEach(item => {
        let styles = getComputedStyle(item);
        let fontSize = parseInt(styles.fontSize, 10);
        item.style.fontSize = `${fontSize + 2}px`
    })
}

/*5.   Удалить ссылку из разметки, не меняя остальной структуры, но при этом 
сохранить ее адрес.*/

let a = document.querySelector("a");
let link;
if(a){
    link = a.href;
    a.parentElement.innerHTML = a.innerHTML; // или a.outerHTML = a.innerHTML;
}

/*6.   Обернуть содержимое div с классом news__more в тег а и сделать ссылку 
на сохранненый адрес из предыдущего задания.*/

let div = document.querySelector("div.news__more");
if(div){
    a = document.createElement("a");
    a.href = link;
    a.innerHTML = div.innerHTML;
    div.innerHTML = "";
    div.insertAdjacentElement("afterbegin", a);

    //7. Добавить у новой ссылки атрибут title со значением заголовка новости.

    let h4 = document.querySelector("h4");
    if(h4){
        a.title = h4.innerText;
    }
    
}

//8.   Тег p заменить на тег b.

let p = document.querySelector("p");
if(p){
    p.outerHTML = `<b>${p.innerHTML}</b>`;
}

/*9.   Тегу h4 - добавить следующие стили:
font - weight: 500;
line - height: 150 %;
text - transform: uppercase;
color: #000;*/

let newsTitle = desciption.firstElementChild;
let h4 = newsTitle.firstElementChild;
h4.style.fontWeight = "500px"
h4.style.lineHeight = "150%"
h4.style.textTransform = "uppercase"
h4.style.color = "#000"
