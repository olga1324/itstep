let car = {
    brand: "BMW",
    model: "x5",
    fuel: "petrol",
    print(){
        console.log(this.brand, this.model, this.fuel);
    }
}

car.print();

let auto = {
    country: "производитель Германия",
    drive(){
        console.log(this.country);
    },
    __proto__: car 
}

auto.drive();

let plan = {
    movier: "двигатель ТРД",
    fly(){
        console.log(this.movier);
    },
    __proto__: car 
}

plan.fly();

let train = {
    cargo: "8 вагонов",
    move(){
        console.log(this.cargo);
    },
    __proto__: car 
}

 train.move();
