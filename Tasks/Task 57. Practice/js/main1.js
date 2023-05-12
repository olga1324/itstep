
let select = document.querySelector("select");

let options = document.querySelectorAll("option");

Array.from(options).forEach(function(option){
    option.style.background = option.value;
})


select.addEventListener("change", function(){

    let color = this.value;
    let box =  document.querySelector(".box");
    this.style.background = color;
    box.style.background = color;
    box.style.borderColor = color;
});