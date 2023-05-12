/*2. Дан маркированный список из 5 пунктов с произвольным текстом
    - при клике на какой-либо элемент списка, этот элемент должен менять цвет 
    на красный, причем всегда должен быть только 1 выделенный элемент;
    - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
    - при наведении на элемент текст должен становится полужирным (использовать 
    тег b для этого), при убирании курсора - возвращаться в исходное состояние;
*/

let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){

    if(event.target.tagName != "LI")
        return;
    //this == ul
    // event.target = li
    let liRed = this.querySelector(".bg-red");
    if(liRed){
        liRed.classList.remove("bg-red");
    }

    event.target.classList.add("bg-red");
});

ul.addEventListener("dblclick", function(event){

    if(event.target.tagName != "LI")
        return;
    //this == ul
    // event.target = li
    let li = document.createElement("li");
    li.innerHTML = event.target.innerHTML;
    this.insertAdjacentElement("beforeend", li);
});

ul.addEventListener("mouseover", function(event){

    if(event.target.tagName != "LI")
        return;
    //this == ul
    // event.target = li
    event.target.innerHTML = `<b>${event.target.innerHTML}</b>`
});

ul.addEventListener("mouseout", function(event){

    if(event.target.tagName != "LI")
        return;
    //this == ul
    // event.target = li
    event.target.innerHTML = event.target.firstElementChild.innerHTML;
});