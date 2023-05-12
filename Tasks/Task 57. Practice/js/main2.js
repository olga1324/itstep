
let input = document.querySelector("input");


input.addEventListener("focus", function(){
    this.style.background = `#00f`;
})

input.addEventListener("blur", function(){
    this.style.background = `blueviolet`;
})