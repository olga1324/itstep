/*
state = {
    products: [
        {
            id,
            name,
            price,
            quantity
        }
    ],
    user: {
        name,
        age
    },

    lastIdProduct //- id последнего добавленного продукта
}
*/
const reducer = require("./reducer/reducer.jsx");   //подкл-ем reducer
const redux = require("redux");                     //подкл-ем redux

const store = redux.createStore(reducer);           //создаем хранилище, и передаем туда параметром - reducer

store.dispatch({
    type: "INIT",
    user: {
        name: "Вася Пупкин",
        age: 30
    },
    products:[
        {
            id: 1,
            image: "image2.jpg",
            name: "Молоко",
            price: 5,
            quantity: 1,
            units: "литр",
            favorite: false
        }
    ],
    formError: {
        image: "",
        name: "",
        price: "",
        quantity: ""
    },
    lastIdProduct: 1,
    
});

module.exports = store;                             //экспортируем store