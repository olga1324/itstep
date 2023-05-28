const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");
const AppView = require("./appview.jsx");
 
const store = redux.createStore(reducer);
 
store.dispatch({ 
// store -хранилище с данными , dispatch - ручной метод вызова action
  type: "SET_STATE", // фиксированная структура type и state
  state: {
    phones: [ "Xiaomi Mi 10", "Samsung Galaxy Note20" ]
  }
});
 
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
  <Provider store={store}> 
    <AppView />
  </Provider>
);

// оборачиваем store в провайдер  и добавляем <AppView />, чтобы был виден
// типовое решение