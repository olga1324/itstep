/*Дан возраст человека. Вывести, что он молодой
 (до 17), взрослый (от 18 до 69) или пожилой 
 (от 70).*/

 var year = 77;

 if (year <= 17){
    console.log("Молодой");
 } else if ((year >= 18) && (year <=69)){
    console.log("Взрослый");
 } else if ( year >= 70){
    console.log("Пожилой");
 }