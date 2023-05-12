/*<article class="news__item">
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

    let divDesciption = document.createElement("div");
    a.insertAdjacentElement("beforeend", divDesciption);
    divDesciption.classList.add("news__desciption");

    let divTitle = document.createElement("div");
    divDesciption.insertAdjacentElement("afterbegin", divTitle);
    divTitle.classList.add("news__title");

    let h4 = document.createElement("h4");
    h4.innerHTML = "We offer a new fertilizer – potassium salt 60% NOD";
    divTitle.insertAdjacentElement("beforeend", h4);

    let divText = document.createElement("div");
    divText.classList.add("news__text");
    divDesciption.insertAdjacentElement("beforeend", divText);

    let p = document.createElement("p");
    p.innerText = "We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD."
    divText.insertAdjacentElement("afterbegin", p)

    // p.outerHTML = `<b>${p.innerText}</b>`

    let divMore = document.createElement("div");
    divMore.classList.add("news__more");
    divDesciption.insertAdjacentElement("beforeend", divMore);

    let span = document.createElement("span");
    span.innerHTML = "more";
    divMore.insertAdjacentElement("beforeend", span);
}


/*
Замечание. В последующих заданиях все созданные переменные использовать нельзя, то есть все элементы нужно получать заного через запросы.
2.   Удалить из полученного кода все тег span, но оставить его содержимое.
3.   Времени добавить  красный фон, белый цвет и внутренние отступы в 25px для даты.
4.   Увеличить шрифт заголовка на 2px.
5.   Удалить ссылку из разметки, не меняя остальной структуры, но при этом сохранить ее адрес.
6.   Обернуть содержимое div с классом news__more в тег а и сделать ссылку на сохранненый адрес из предыдущего задания.
7. Добавить у новой ссылки атрибут title со значением заголовка новости.
8.   Тег p заменить на тег b.
9.   Тегу h4 -добавить следующие стили:
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: #000;
*/
// Удалить из полученного кода все тег span, но оставить его содержимое.
let delSpan = document.querySelectorAll("span");
if (delSpan.length) {
    Array.from(delSpan).forEach(item => {
        item.outerHTML = item.innerText;
    })


    // Времени добавить  красный фон, белый цвет и внутренние отступы в 25px для даты.
    let time = document.querySelector("time");
    time.style.color = "#fff"
    time.style.backgroundColor = "#f00";
    time.style.padding = "25px";
}


//Увеличить шрифт заголовка на 2px.
let header = document.querySelectorAll("h4");
if (header.length) {
    Array.from(header).forEach(item => {
        let styles = getComputedStyle(item);
        let fontSize = parseInt(styles.fontSize, 10);
        item.style.fontSize = `${fontSize + 2}px`
    })
}

//Удалить ссылку из разметки, не меняя остальной структуры, но при этом сохранить ее адрес.

let a = article.firstChild;
let link = a.href
a.href = "";

//Обернуть содержимое div с классом news__more в тег а и сделать ссылку на сохранненый адрес из предыдущего задания.
let desciption = a.lastChild;
let divMore = desciption.lastChild;
divMore.innerHTML = `<a>${link}</a>`

//Добавить у новой ссылки атрибут title со значением заголовка новости.
let newLink = divMore.firstElementChild;
newLink.setAttribute("title", "desciption")

//Тег p заменить на тег b.
let newsText = document.querySelector(".news__text");
let p = newsText.firstElementChild;
p.outerHTML = `<b>${p.innerText}</b>`

/*Тегу h4 -добавить следующие стили:
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: #000;
*/
let newsTitle = desciption.firstElementChild;
let h4 = newsTitle.firstElementChild;
h4.style.fontWeight = "500px"
h4.style.lineHeight = "150%"
h4.style.textTransform = "uppercase"
h4.style.color = "#000"
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy