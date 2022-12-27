/*Задание #4
а) Создать класс Товар, имеющий переменные имя, цена,
 рейтинг. 
б) Создать класс Категория, имеющий переменные имя и 
массив товаров. Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных 
товаров. 
г) Создать класс User, содержащий логин, пароль и 
объект класса Basket. Создать объект класса User.*/


//a

class Product{
     name;
     price = 0;
     ranking = 0;

    constructor(name, price, ranking){
        this.name = name;
        this.price = price;
        this.ranking = ranking;
    }
}

//b

class Category{
    name;
    Products;

    constructor(name, Products){
        this.name = name;
        this.Products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
}

//c

class Basket{
    products = [];

    addProduct(product){ // добавляем продукты в карзину
        this.products.push(product);
    }    
}

//d 

class User{
    login;
    password;
    basket;

    constructor(login, password){
        this.login = login;
        this.password = password;
        this.basket = new Basket();
    }

    addProduct(product){
        this.basket.addProduct(product);
    }

}

//Создать несколько объектов класса Категория

let milk = new Product("Milk", 1);
let meat = new Product("Meat", 5);
let bread = new Product("Black bread", 1);
let cheese = new Product("Young russian cheese", 6);
let cake = new Product("Fairytale", 4);
let socks = new Product("Sock" , 2);

// содержащий массив купленных товаров

let food = new Category("Food");
let clothes = new Category("Cloth");

// добавляем товары в категории

food.addProduct(milk);
food.addProduct(meat);
food.addProduct(bread);
food.addProduct(cheese);
food.addProduct(cake);

clothes.addProduct(socks);

console.log(food, clothes);

// user выбирает товары в свою карзину

let peter = new User("Петя","qwerty");

peter.addProduct(milk);
peter.addProduct(bread);
peter.addProduct(socks);

console.log(peter);



