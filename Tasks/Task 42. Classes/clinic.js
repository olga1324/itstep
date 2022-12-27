/*1) Создать класс Animal и расширяющие его классы Dog, Cat, Horse. 
2) Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep. 
Метод makeNoise, например, может выводить на консоль "Такое-то животное спит".
3) Dog, Cat, Horse переопределяют методы makeNoise, eat. 
4) Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. 
5) Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). 
Пусть этот метод распечатывает food и location пришедшего на прием животного. 
6) Cоздайте массив типа Animal, в который запишите животных всех имеющихся у вас типов.
 В цикле отправляйте их на прием к ветеринару.
*/

// 1 - 4
class Animal{
    food;
    location;

    constructor(food, location){
        this.food = food;
        this.location = location;
    }

    toString(){
        return `Food: ${this.food}, locations: ${this.location}`;
    }
    sleep(){
        console.log("animal sleep");
    }

    makeNoise(){
        console.log("Zzzzz....");
    }

    eat(){
        console.log("animal is eating");
    }
}

class Cat extends Animal{
    lives = 9;

    constructor(food, location, lives){
        super(food, location); // super - наследует от базового Animal

        this.lives = lives;
    }

    makeNoise(){
        console.log("Meoe");
    }

    eat(){
        console.log("cat eat milk");
    }    
}

class Dog extends Animal{
    hasMuzzle = false;
    makeNoise(){
        console.log("Gau-gau");
    }

    eat(){
        console.log("dog eat meat");
    }      
}

class Horse extends Animal{

    hooves = 4; 

    makeNoise(){
        console.log("Igo-igo");
    }

    eat(){
        console.log("horse eat grass");
    }     
}

//5

class Doctor{
    treatAnimal(animal){
        console.log(animal.food, animal.location);
    }
}

//6

let cat = new Cat("milk", "street");
let dog = new Dog("meat", "street");
let horse = new Horse("herb", "house");

let Aibolit = new Doctor();

let animals = [];
animals.push(cat);
animals.push(dog);
animals.push(horse);

animals.forEach(function(animal){
    console.log(animal);
    Aibolit.treatAnimal(animal);
    animal.makeNoise();
    animal.eat();
    animal.sleep();
    console.log(animal.toString());
})