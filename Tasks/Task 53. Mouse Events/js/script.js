document.querySelector(".parent").onmouseover = function(event){ // курсор наведен
    if(event.target.classList.contains("parent")){ 
        // event target -эл-т на который курсор перешел
        event.target.classList.add("bg-blue")
    }
    if(event.target.classList.contains("child")){
        event.target.classList.add("bg-black")
    }
}
document.querySelector(".parent").onmouseout = function(event){ // курсор убран
    if(event.target.classList.contains("parent")){
        event.target.classList.remove("bg-blue")
    }
    if(event.target.classList.contains("child")){
        event.target.classList.remove("bg-black")
    }
}