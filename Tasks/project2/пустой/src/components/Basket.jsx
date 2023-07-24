const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const Basket = (props) => {

    return <>
        <div className="container d-flex justify-content-center align-items-center"
        >
            <div className="card_basket p-5 basket ">
                <h3 className="">Получить промокод</h3>
                <form className="d-flex flex-column">
            
                    <div className="mt-3 email">
                        <label htmlFor="title" className="form-label">Введите ваш email...</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <h5 className=" ">Выберите форму оплаты:</h5>
                   <div className = "button__group ">
                          <div>
                            <button type="button" class="btn btn-info balans col-6 float-start">СПИСАТЬ С БАЛАНСА</button>
                        </div>
                    <div>
                        <button type="button" class="btn btn-info bank  col-6 float-end" >БАНКОВСКАЯ КАРТА</button>
                    </div>
                    
                      
                        <div>
                        <button type="button" class="btn btn-info erip  col-6 float-start" >ЕРИП</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-info sms  col-6 float-end" >SMS (IPAY)</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-info mts  col-6 float-start" >МТС-ДЕНЬГИ</button>
                    </div>
                      
                    </div>
                   
                </form>
            </div>

        </div>
    </>
};

module.exports = connect(null, { push })(Basket);

/*const React= require("react");
const connect = require("react-redux").connect;
const {shops} = require("../store.jsx");
const { useState } = require("react");
const ItemsTable = require("./ItemsTable.jsx");


const Basket = () => {
    const [items, setItems] = useState([]);
    const result = items.reduce(
        (previousValue, currentItem) =>
            previousValue + currentItem.price * currentItem.count,
        0
    );
    const EmptyTemplate = (
        <div className="empty__text">У вас нет еще товаров в корзине</div>
    );
    const Footer = (
        <div className="result">
            <span>
                Общая стоимость: <span className="value">{result} р.</span>
            </span>
            <button>Оформить</button>
        </div>
    );

    const handleRemoveItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleIncreaceCount = (id) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    item.count++;
                }
                return item;
            })
        );
    };

    const handleDecreaceCount = (id, count) => {
        if (count < 2) {
            handleRemoveItem(id);
        } else {
            setItems(
                items.map((item) => {
                    if (item.id === id) {
                        item.count--;
                    }
                    return item;
                })
            );
        }
    };

    return (
        <>
        <div className="container">
            <div className="Basket">
            <h2>Корзина</h2>
           
            {items.length ? (
                <ItemsTable
                    items={items}
                    removeItem={handleRemoveItem}
                    increaceCount={handleIncreaceCount}
                    decreaceCount={handleDecreaceCount}
                />
            ) : (
                EmptyTemplate
            )}
            {!!items.length && Footer}
                </div>
            </div>
        </>
    );
}


module.exports = Basket;

*/






















