let button = document.querySelector("button");
let div = document.querySelector("div");


button.addEventListener("click", function(){
    if(div.classList.contains("open")){
        div.classList.remove("open");
        this.innerText = "Показать";
    } else {
        div.classList.add("open");
        this.innerText = "Скрыть";
    }
});