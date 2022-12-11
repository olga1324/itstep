//Дан прямоугольник.Рассчитать периметр и площадь

let rectangle = {
    height : 0,
    weight : 0,
perimetr: function(){
    return 2*(this.weight + this.height)
},
Square: function(){
return this.weight * this.height
}
}
let x = 3, y = 5;
rectangle.weight = x, rectangle.height = 5;

let operation1 = rectangle.perimetr();

let operation2 = rectangle.Square();
console.log(operation1, operation2);