/*Задание #3
Рядом с мышью — и гусь велик, но вот рядом с драконом... 
В этой задаче у нас будут гуси (класс Goose) и драконы 
(класс Dragon). А также их предки, классы BigAnimal или 
SmallAnimal, кто чей предок — догадайтесь сами. Затем 
переопределите для Goose и Dragon метод getSize(), так,
 чтобы они выводили строки о размере животного.*/


class BigAnimal{
   name;
   size;
   weight;
   length;

   constructor(name, size, weight, length){
      this.name = name;
      this.size = size;
      this. weight =  weight;
      this.length = length;
  }

  getSize(){
     console.log(this.size);
  }
}

class Dragon extends BigAnimal {
   constructor(name, size, weight, length){
     super(name, size, weight, length);
  }

  getSize(){
   super.getSize();
   }
}

let Dragon = new Dragon("дракон", 250,350, 40);
console.log(Dragon);
Dragon.getSize;

class SmallAnimal{
   name;
   size;
   weight;
   length;

   constructor(name, size, weight, length){
      this.name = name;
      this.size = size;
      this. weight =  weight;
      this.length = length;
  }

  getSize(){
     console.log(this.size);
  }
}

class Goose extends SmallAnimal {
   constructor(name, size, weight, length){
     super(name, size, weight, length);
  }

  getSize(){
   super.getSize();
   }
}

let Goose = new Goose("гусь", 20, 35, 4);
console.log(Goose);
Goose.getSize;