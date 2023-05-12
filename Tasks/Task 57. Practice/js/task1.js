/*1. Дан выпадающий список с 5 цветами и блок.
    - сделать так, что каждый пункт был закрашен в соответствующий цвет
    - при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет.
*/

const listColor = document.getElementById("color");

listColor.addEventListener("change", function (event) {
    let options = document.querySelectorAll("option");

    let block = document.querySelector(".block");
    block.style.backgroundColor = `${this.value}`;
})

/* or

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

*/