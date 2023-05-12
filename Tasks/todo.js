(function ()) {
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement("h2");
        appTitle.innerHTML = title;
        return appTitle;
    }

    //создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement("form");
        let input = document.createElement("input");
        let buttonWrapper = document.createElement("div");
        let button = document.createElement("button");

        form.classList.add("input-group", "mb-3");
        input.classList.add("form-control");
        input.placeholder = "введите название нового дела";
        buttonWrapper.classList.add("input-group-append");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Добавить дело";

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    //создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement("ul");
        list.classList.add("list-group");
        return list;
    }

    function createTodoItem(name) {
        //помещаем кнопки в один элемент
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-item-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить';

        //вкладываем кнопки в отдельный элемент
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // доступ к элементу и кнопкам для приложения
        return {
            item,
            doneButton,
            deleteButton,
        };
    }
    document.addEventListener('DOMContentLoaded', function () {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('Список дел');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let todoItems = [createTodoItem('купить хлеб'), createTodoItem('купить молоко')];

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        todoItemForm.form.addEventListener('submit',function(e){
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
            if(!todoItemForm.input.value){
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            //добавляем обработчики на кнопки
             todoItem.doneButton.addEventListener('click', function(){
                todoItem.item.classList.toggle('list-group-item-success');
             });
             todoItem.deleteButton.addEventListener('click', function(){
                if(confirm('Вы уверенны?')){
                    todoItem.item.remove();
                }
             });
             
            // создаем и добавляем в список новое дело с названием из поля ввода
            todoList.append(createTodoItem(todoItemForm.input.value).item);
            // обнуляем значение в поле, чтобы не пришлось стирать его вручг=ную
            todoItemForm.input.value = '';
        });
     //   todoList.append(todoItems[0].item);
       // todoList.append(todoItems[1].item);
    });
})();