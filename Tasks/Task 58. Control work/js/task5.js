/*5. Написать функцию, принимающая на вход массив дат и сортирующая их в
 порядке возрастания.*/
let data = [ 
    new Date ("2022-05-06"), 
    new Date ("2020-12-09"), 
    new Date ("2015-03-16"),
    new Date  ("2023-04-01"),
    new Date ("2023-02-10")
];

data.sort(function(date1,date2){
    return (date1 - date2);
})

console.log(data)

// or
function getDiffDate(date1, date2) {
    let a = date1.split(".").map((item) => +item);
    let b = date2.split(".").map((item) => +item);

    if ((a[2] > b[2]) || ((a[2] == b[2]) && (a[1] > b[1])) || ((a[2] == b[2]) && a[1] == b[1] && a[0] > b[0])) {
        return 1;
    }

    if (a[2] == b[2] && a[1] == b[1] && a[0] == b[0]) {
        return 0;
    }

    return -1;
}


let array = ["01.01.2025", "01.01.2018", "01.01.2022", "01.01.2023", "01.01.2020"];

console.log(array);

array.sort(getDiffDate);

console.log(array);
