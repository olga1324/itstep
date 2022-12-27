class Engine{ // идем от меньшего к большему, наращивая свойства. 
    power;
    company;

    constructor(power, company){
        this.power = power;
        this.company = company;
    }

    toString(){
        return`Мощность: ${this.power}, производитель:${this.company}`;
    }
}


class Person{
    fullName;
    age;

    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }

    toString(){
        return`Полное имя: ${this.fullName}, возраст:${this.age}`;
    }
}


class Driver extends Person{ // наследует свойства из Person
    experience;

    constructor(fullName, age, experience){
        super(fullName, age);

        this.experience = experience;
    }

    toString(){
        return`Полное имя: ${this.fullName}, возраст: ${this.age}, cтаж вождения: ${this.experience}`;
    }
}


class Car {
    carClass;
    engine;
    driver;
    marka;

    constructor(carClass, engine, driver, marka){
        this.carClass = carClass;
        this.engine = engine;
        this.driver = driver;
        this.marka = marka;
    }

    start(){
      this.engine.power = 100;
    }

    stop(){
        this.engine.power = 0;
    }

    turnRight(){
        console.log("Поворот направо");
    }

    turnLeft(){
        console.log("Поворот налево");
    }

    toString(){ 
        return `Класс машины: ${this.carClass}, дваигатель:${this.engine},
         стаж вождения: ${this.driver}, ${this.driver.experience} марка автомобиля: ${this.marka}`;
        }
}


class Lorry extends Car{  // наследует свойства из Car
carrying;

constructor(carClass, engine, driver, marka, carrying){
    super(carClass, engine, driver, marka);

    this.carrying = carrying;
}

toString(){ // выводим все свойства . 
    // можно добавлять to String() в to StringO()
    return `Класс машины: ${this.carClass}, дваигатель:${this.engine.toString()}, 
    стаж вождения: ${this.driver.fullName},${this.driver.experience}, 
    марка автомобиля: ${this.marka}, грузовик перевозит: ${this.carrying}`;
    } 
}


class SportCar extends Car{ // наследует свойства из Car
   
    speed;

    constructor(carClass, engine, driver, marka, speed){
        super(carClass, engine, driver, marka);
        this.speed = speed;
    }
    
    toString(){
        { // выводим все свойства 
            return `Класс машины: ${this.carClass}, дваигатель:${this.engine.toString()}, 
            стаж вождения: ${this.driver.fullName},${this.driver.experience}, 
            марка автомобиля: ${this.marka}, скорость: ${this.speed}`;
            } 
        }
}


let engineCar = new Engine(220, "Ferrari");
let driverCar = new Driver(35, "Fernando Alonso", 20);

let car = new SportCar("Sport Car", engineCar, driverCar, "Ferrari", 300);

console.log(car.toString());
car.start();
console.log(car);
car.stop();
console.log(car);
car.engine.power = 200;
car.speed = 350;
console.log(car);

/*1. Добавить класс Client, который наследуется от класса Person. Добавляются свойства adres, 
payment, переопределяется метод toString().
2. Добавить класс Taxi, который наследуется от класса Car. Добавляется свойство tariff,
 переопределяется метод toString().
3. Добавить класс Order. Свойства distance (длина пути), taxi (объект класса Taxi), 
client (объект класса Client). Метод getPrice(), который вовзвращает сумму заказа (расстояние умножить
на тариф). Метод toString(), который выводит имя клиента, способ облаты, расстояние и цену заказа.*/

class Client extends Person{
    adres;
    payment;

    constructor(age, fullName, adres, payment){
        super(age, fullName);

        this.adres = adres;
        this.payment = payment;
    }

    toString(){
        return `Age: ${this.age}, fullName: ${this.fullName}, adres: ${this.adres},
         payment: ${this.payment}`;
    }
}


class Taxi extends Car { 
    tariff;

    constructor(carClass, engine, driver, marka,tariff){
        super(carClass, engine, driver, marka);
        this.tariff = tariff;
    }
    

    toString(){
        return `Class: ${this.carClass}, Engine: ${this.engine.toString()},
        Driver: ${this.driver.fullName}, ${this.driver.experience}, Marka: ${this.marka}, 
        tariff: ${this.tariff}`;
    }
}

class Order {
    distance;
    taxi;
    client;
     
    constructor(distance, taxi, client){
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }

    getPrice(){
        return this.distance * this.taxi.tariff;
    }

    toString(){
        return `distance: ${this.distance}, 
        taxi: ${this.taxi.tariff}, taxi: ${this.taxi.carClass}, taxi: ${this.taxi.engine.toString()}, 
        taxi: ${this.taxi.driver.fullName},taxi: ${this.taxi.driver.experience},taxi: ${this.taxi.marka},
        client: ${this.client.fullName}, client: ${this.client.age}, client: ${this.client.adres}, client: ${this.client.payment},
        price: ${this.getPrice()}`;
    }
}

let engine = new Engine(350, "Renault Logan");

let driver = new Driver("Иван Иванович", 45, "11 years");

let client = new Client(27, "Петр Петрович", "Комсомольская 40а", "картой");

let Uber = new Taxi("Geely", 270, "Николай Юрьевич", "Emgrand", "0.79");

let order = new Order(17, Uber, client);

console.log(client, Uber, order);
console.log(order.getPrice());
console.log(client.toString());
console.log(Uber.toString());
order.toString();


