/*Дан радиус круга и сторона квадрата. 
Опеределить, поместится ли круг в квадрат, 
либо квадрат в круг, либо ничего ни во что не 
поместится.*/

var radius = 21,
    wall = 15,
    diagonalCircle = radius * 2,
    diagonalSquare = (2 * wall) ** 0.5;
if (diagonalCircle <= wall) {
    console.log("Круг поместится в квадрате");
} else if (diagonalSquare <= diagonalCircle) {
    console.log("Квадрат поместится в круг");
} else {
    console.log("ничего ни во что не поместится");
}