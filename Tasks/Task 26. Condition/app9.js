//Дан номер дня недели и время в часах и минутах по 
//отдельности. Определить, рабочее это время или нет,
// если время считается рабочим с 1 по 5 день с 8.00 по 17.00.

var day = 3, hour = 17, minutes = 1;

if ((day > 0 && day < 6) && ((hour >= 8 && hour <= 16) || (hour == 17 && minutes == 0))) {
    console.log("work time");
} else {
    console.log("resting time");
}