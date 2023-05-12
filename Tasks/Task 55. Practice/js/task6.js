/*6. Дан квадрат. При наведении на квадрат сделать так, чтобы при движении мыши квадрат 
двигался вместе с курсором мыши. Курсор должен находится в центре квадрата.*/

let child = document.querySelector(".child");

child.addEventListener("mouseover", function(event){ // наведение мыши

    let styles = getComputedStyle(this);

    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
// ищем координаты
    let x = Math.round(event.clientX - width/2);
    let y = Math.round(event.clientY - height/2);

    this.style.position = "fixed";
    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
})

child.addEventListener("mousemove", function(event){ // двигаем мышь
    let styles = getComputedStyle(this);

    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);

    let x = Math.round(event.clientX - width/2);
    let y = Math.round(event.clientY - height/2);

    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
});