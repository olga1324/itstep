var name = "Вася";
const surname = "Пупкин";

//неициализированные переменные
var growth, weight;

// рост 180, вес 0,89
growth = 180;
weight = 0.89;

//вес в кг 
var weightKg = (0.89*100);

// надпись 
console.log("Меня зовут", name, surname, ".Я вешу", weight, "ц", ".Мой рост", growth,"см.");

//изменение роста и веса
var weightKg2 = (weight + 10);
var growth2 = (growth - 2);

//новые параметры Васи
console.log(weightKg2, growth2, name, surname, "потолстел и стоптался");

//новый мальчик
var name2 = 'Петя';
var weight2 = weightKg * 2;
console.log(name2, weight2);
var weightKg3 = (weight2 / weightKg);
console.log("Теперь я", name2, surname, "и вешу в", weightKg3, "раза больше,чем в молодости");
