/*2. Дано поле ввода, кнопка и div. Если в div нет списка, 
то добавить маркированный список с одним элементом с текстом 
введеным в поле. При последующем нажатии добавлять в конец 
списка элемент списка с текстом введеным в поле.*/

let button = document.querySelector(".btn_click");

    button.addEventListener("click", function () {

      let div = document.querySelector("div");

        if(!ul){
            ul = document.createElement("ul");
            div.insertAdjacentElement("afterbegin", ul);
        }    

        let task = document.querySelector("input").value;

        let li = document.createElement("li");
        li.innerText = task;
        ul.insertAdjacentElement("beforeend", li);


/*4. Во второй задаче добавить возможность при клике на элемент
 списка удалять его из списка. Если удаляется последний элемент 
 списка, то список также удаляется.*/

        li.addEventListener("click", function(){

            let parent = this.parentElement;
            this.remove();

            if(parent.children.length == 0){
                parent.remove();
            }
        })
    
        });

        let lis = document.querySelectorAll("li");

if(lis.length > 0){
    Array.from(lis).forEach((li) => {
         li.addEventListener("click", function(){
            this.remove();
        })
    })
}