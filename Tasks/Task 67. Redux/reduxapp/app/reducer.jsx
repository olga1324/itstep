const Map = require("immutable").Map; // const Map - название нашей переменной, 
//require - подключение, immutable - название пакета, который мы подключаем, require("immutable").Map - кподключение объекта Map из пакета immutable 
 
const reducer = function(state = Map(), action) {
  switch (action.type) {
      case "SET_STATE": // по умолчанию
        return state.merge(action.state); // пременная состояния 
    case "ADD_PHONE": // добавляем телефоны
        return state.update("phones", (phones) => [...phones, action.phone]);
    case "DELETE_PHONE": // удаляем телефоны
        return state.update("phones",
            (phones) => phones.filter( // фильтруем список телефонов
                (item) => item !== action.phone // если не указанное значение, оставляем
            )
        );
  }
  return state;
}
module.exports = reducer;