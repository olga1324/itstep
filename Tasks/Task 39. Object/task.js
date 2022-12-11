//1. Создайте пустой объект user.

let user = {};

//2. Добавьте свойство name со значением John.

user.name = "john";
console.log(user);

//3. Добавьте свойство surname со значением Smith.

user.surname = "smith";
console.log(user);

//4. Измените значение свойства name на Pete.

user.name = "Pete";
console.log(user);

//5. Удалите свойство name из объекта.

delete user.name
console.log(user);

/*6. Пусть дан объект с зарплатами сотрудников
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
Найти сумму зарплат с использованием for..in.*/
console.log("Task 6");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]; // key = John, Ann, Pete ; salaries[key] = 100, 160, 130
}

console.log(sum);

/*7. Дан объект
let user = {
    name: "Иван",
    age: 30
};
Написать код, который создает его точный клон
(новый объект с такой же структурой).*/
console.log("Task 7");

user = {
    name: "Иван",
    age: 30
};

let newUser1 = Object.assign({},  user1, {name: "Вася", age:15});
let newUser2 = ({...user1, name: "Петя", age:25});
let newUser3 = {};

for (let key in user) {
    newUser3[key] = user1[key];
}

console.log(newUser1);
console.log(newUser2);
console.log(newUser3);

//let cloneUser = {}; // создаем новый объект

/*for (let key in user) {
    cloneUser[key] = user[key];
}

cloneUser = Object.assign({}, user); // универсальный способ клонирования объекта в новую переменную

console.log(user, cloneUser);*/

/*8. Дан объект
let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
Написать код, который создает его точный клон
(новый объект с такой же структурой).*/
console.log("Task 8");

user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
cloneUser = {};

for (let key in user) {
    if (typeof user[key] != "object")
        cloneUser[key] = user[key];
    else {
        cloneUser[key] = {};
        for (let key1 in user[key]) {
            cloneUser[key][key1] = user[key][key1];
        }
    }
}

console.log(user, cloneUser);
