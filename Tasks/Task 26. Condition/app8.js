//Дано год.Определить, високосный это год или нет.
//Вывести в консоль соответствующую надпись, а также
// количество дней в году.
 var year = 2012;
 if ((year % 4 == 0) && (year % 100 != 0) || ( year % 400 == 0)){
    console.log('високосный год, 366 дней')
 } else {
     console.log('невисокосный год, 365 дней')
 }