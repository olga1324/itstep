/*1. Дан квадратный зеленый блок.
    - при наведении он должен менять цвет на синий, при уводе курсора возвращаться 
    в исходное положение;
    - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
    - при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.

    4 обработчика через классы
    */

   let block = document.querySelector(".box");
//1

   block.addEventListener("mouseover", function(event){
       this.classList.add("bg-blue");
   });
   
   block.addEventListener("mouseout", function(event){
       this.classList.remove("bg-blue");
   });
  
//2
   block.addEventListener("click", function(event){
       let styles = getComputedStyle(this);
       let width = parseInt(styles.width);
       let height = parseInt(styles.height);
   
       this.style.width = `${width/2}px`;
       this.style.height = `${height/2}px`;
   })
   
//3
   block.addEventListener("contextmenu", function(event){
       event.preventDefault();
       let styles = getComputedStyle(this);
       let width = parseInt(styles.width);
       let height = parseInt(styles.height);
   
       this.style.width = `${width*2}px`;
       this.style.height = `${height*2}px`;
   })