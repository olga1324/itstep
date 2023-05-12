let ul = document.querySelector("ul");

ul.addEventListener("mouseover", function(e){

    let li = e.target;

    if(li.tagName != "LI"){
        return false;
    }

    if((+li.innerText) % 2 == 0){
        li.classList.add("red");
    } else {
        li.classList.add("blue");
    }

});

ul.addEventListener("mouseout", function(e){

    let li = e.target;

    if(li.tagName != "LI"){
        return false;
    }

    if((+li.innerText) % 2 == 0){ // innerText - текстовое содержимое без тега
        li.classList.remove("red");
    } else {
        li.classList.remove("blue");
    }

});

let lis = document.querySelectorAll("li");

//lis = document.getElementsByTagName("li"); // живые коллекции
// менее эффективный вариант
if(lis.length > 0){
    Array.from(lis).forEach(function(li){
        li.addEventListener("mouseover", function(){
            if((+this.innerText) % 2 == 0){
                this.classList.remove("red");
            } else {
                this.classList.remove("blue");
            }
        })
    });
}