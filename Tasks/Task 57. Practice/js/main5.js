document.querySelector("div").onclick = function(e){

    let button = e.target;

    if(button.tagName != "BUTTON"){
        return false;
    }
        
    let p = document.querySelector("p");

    p.innerHTML += button.innerText;
    

}