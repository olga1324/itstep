const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/action.jsx");
const UserInfo = require("./UserInfo.jsx");
const Form = require("./Form.jsx");
const ListProd = require("./ListProd.jsx");

const AppView = (props) => {    //props - параметры компонента, приходящие из вне(3 экшена, пользователь?? и продукты??)
                                //props.products, props.currentUser
    return <>
        <UserInfo user={props.currentUser} />
        <Form onProductAdd={props.addProduct} /> 
        <ListProd products={props.products} onProductDelete={props.deleteProduct} onProductLike={props.likeProduct} onProductDisLike={props.disLikeProduct} />
    </>;

}

const mapStateToProps = (state) => {    //mapStateToProps(выгружает необходимые данные из store) - карта переменных состояния, которые будут храниться в объекте props
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView);    //mapStateToProps - ф-ия с данными из хранилища, actions - действия, кторые хотим выпонитьпараметр AppView - то, куда экспортируются mapStateToProps и экшены