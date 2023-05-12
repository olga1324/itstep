//9. Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.

let d = "25.04.2020";
let arr = d.split(".").reverse();

let addDays = (days) => {
    let date = new Date(arr);
    date.setDate(date.getDate() + days);
    date = date.toISOString().slice(0, 10);
    return date.split("-").reverse().join(".")
}
let date = addDays(10);
console.log(date);

