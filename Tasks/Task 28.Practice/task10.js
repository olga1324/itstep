/*Даны 2 окружности (радиусы и центры). 
определить их взаимное расположение.*/

var r1 = 7,
    r2 = 4,
    dist = 2;

if (dist < r1 - r2) {
    console.log("одна окружность лежит внутри другой, не касаясь");
} else if (dist > r1 + r2) {
    console.log("окружности расположены раздельно, не касаясь");
} else if ((dist > r1 + r2) && (dist < r1 - r2)) {
    console.log("окружности пересекаются");
} else if (dist == r1 + r2) {
    console.log("окружности касаются извне");
} else {
    console.log("окружности касаются изнутри");
}

//or

let x1 = 1, y1 = 2, r1 = 3, x2 = -1, y2 = 2, r2 = 3;

let d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;

if (d > r1 + r2) {
    console.log("Не пересекаются и не лежат друг в друге");
} else if (d == r1 + r2) {
    console.log("Внешнее качание");
} else if (d < Math.abs(r2 - r1)) { // Math.abs - модуль числа (число без знака)
    console.log("Не пересекаются и лежат друг в друге")
} else if ((d == Math.abs(r2 - r1))) {
    console.log("Внутреннее касание");
} else {
    console.log("Пересекаются в 2 точках");
}