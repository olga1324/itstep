const React = require("react");
const FormAdd = require("./FormAdd.jsx");
const Home = require("./Home.jsx");
const Title = require("./Title.jsx");
const Post = require("./Post.jsx");
const {Route, Switch} = require("react-router");
const Header = require("./Header.jsx");
const Footer = require("./Footer.jsx");
const Basket = require("./Basket.jsx");
const SignIn = require("../components/auth/SignIn.jsx");
const SignUp = require("../components/auth/SignUp.jsx");
const { useState } = require("react");



const AppView = () => {

const [cartItems,setCartItems] = useState ([]);


    return <div className="wrapper">
        <Header />
        <Switch>
            <Route exact path="/" component={Title} />
            <Route path="/form" component={FormAdd} />
            <Route path="/blog/:id" component={Post} />
            <Route path="/blog" component={Home}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/basket" component={Basket} />

        </Switch>

        <Footer />
    </div>;
}

module.exports = AppView;









//const Basket = require("./Basket.jsx");
//<Route path="/basket" component={Basket} />

//<Route path="/basket" component={CartBtn} />
//const CartBtn = require ("./CartBtn.jsx");







/*
const AppView = () => {

    return <div className="wrapper">
        <Header/>
        <Switch> 
            <Route exact path="/" component={Title} />
            <Route path="/edit/:id" component={FormEdit} />
            <Route  path="/form" component={FormAdd} />
            <Route path="/blog/:id" component={Post} />
            <Route path="/blog" component={Home} addShopInCart={this.addShopInCart} />
            <Route path="/auth" component={Auth} />
            <Route path="/basket" component={Basket} 
            cartList={this.state.cartList}
                addShopInCart={this.addShopInCart}
                removeShopFromCart={this.removeShopFromCart}
                deletePurchasedShop={this.deletePurchasedShop} />
        </Switch>
        
       <Footer/>
    </div>;
}

module.exports = AppView;*/