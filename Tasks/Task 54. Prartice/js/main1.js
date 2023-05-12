let block = document.querySelector(".box");

block.addEventListener("mouseover", function(event){
    this.classList.add("bg-blue");
});

block.addEventListener("mouseout", function(event){
    this.classList.remove("bg-blue");
});

block.addEventListener("click", function(event){
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width/2}px`;
    this.style.height = `${height/2}px`;
})

block.addEventListener("contextmenu", function(event){
    event.preventDefault();
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width*2}px`;
    this.style.height = `${height*2}px`;
})