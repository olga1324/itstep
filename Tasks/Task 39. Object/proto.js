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
console.log("Вывод кота 2:");
cat.name = "Гав";
console.log(cat.name, cat.color, cat.__proto__.name); // сначала использует св-ва cat, затем animal  с помощью proto
for(let key in cat){
    console.log(key, cat[key]);
}
