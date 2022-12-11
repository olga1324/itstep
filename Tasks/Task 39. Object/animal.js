let animal = {
    name: "Барсик",
    color: "black",
    weight: 9,
    walk(){
        //console.log("Я бегу");
    },
    eat(food){
        this.weight += food;
    }
}

let cat = {
    sound(){
        console.log("Meow");
    },
    __proto__: animal // использует свойства объекта animal
}

let dog = {
    sound(){
        console.log("Woof");
    },
    __proto__: animal // использует свойства объекта animal
}
// cat.__proto__ = animal;

animal.name = "Пушок";
console.log(animal.name, animal.color, animal.weight );
animal.eat(1);
console.log(animal.weight);
animal.weight += 1;
console.log(animal.weight);
animal.walk();

console.log("Вывод кота 1:");
cat.color = "white";
console.log(cat.name, cat.color, cat.__proto__.name);
cat.sound();
cat.walk();
for(let key in cat){
    console.log(key, cat[key]);
}

console.log("Вывод собаки 1:");
animal.name = "Рекс"
dog.color = "brown";
console.log(dog.name, dog.color, dog.__proto__.name);
dog.sound();
dog.walk();
for(let key in dog){
    console.log(key, dog[key]);
}
