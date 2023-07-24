const React = require("react");

const Form = (props) => {

    let [data, setData] = React.useState({
        image: "",
        name: "",
        price: "",
        quantity: "",
        favorite: false
    })

    let [formError, setFormError] = React.useState({
        image: "",
        name: "",
        price: "",
        quantity: "",
    }); 

    function validate() {
        let isValid = true;
        if (data.image == "") {
            formError.image = "Выберите картинку";
            isValid = false;
        }
        if (data.name == "") {
            formError.name = "Введите имя";
            isValid = false;
        }
        if (data.price == "") {
            formError.price = "Введите цену";
            isValid = false;
        }
        if (data.quantity == "") {
            formError.quantity = "Укажите количество";
            isValid = false;
        }
        setFormError({ ...formError });
        return isValid;
    }

    function handleFormSubmit(event){
        event.preventDefault();
        if (!validate()) {
            return false;
        }
        props.onProductAdd(data);
        setData({
            image: "",
            name: "",
            price: "",
            quantity: "",
            favorite: false
        });
    }

    function handleImageChange(event){
        setData({ ...data, image: event.target.value });
    }

    function handleNameChange(event){
        setData({...data, name: event.target.value});
    }

    function handlePriceChange(event){
        setData({ ...data, price: event.target.value });
    }

    function handleQuantityChange(event){
        setData({ ...data, quantity: event.target.value });
    }

    function handleCheckboxChange(event){
        if (event.target.checked) {
            setData({ ...data, favorite: true });
        } else {
            setData({ ...data, favorite: false });
        }
    }

    function handleUnitsChange(event) {
        setData({ ...data, units: event.target.value });
    }

    return<>
                <form className="blog_form" action="" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Картинка</label>
                        <input type="text" className="form-control" id="image" onChange={handleImageChange} value={data.image} />
                        {formError.image != "" && <div className="red">{formError.image}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Название</label>
                        <input type="text" className="form-control" id="name" onChange={handleNameChange} value={data.name}/>
                        {formError.name != "" && <div className="red">{formError.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Цена</label>
                        <input type="text" className="form-control" id="price" onChange={handlePriceChange} value={data.price} />
                        {formError.price != "" && <div className="red">{formError.price}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Количество</label>
                        <input type="text" className="form-control" id="quantity" onChange={handleQuantityChange} value={data.quantity} />
                        {formError.quantity != "" && <div className="red">{formError.quantity}</div>}
                    </div>
                    <div className="mb-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-label">
                                <label htmlFor="units">Единицы измерения:</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-control">
                                <select name="units" id="units" onChange={handleUnitsChange}>
                                    <option value="">Выберите единицу измерения</option>
                                    <option value="Литр">Литр</option>
                                    <option value="Килограмм">Килограмм</option>
                                    <option value="Штука">Штука</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-label">
                            <label>Избранное:</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-control">
                            <div className="form-control-radio">
                                <input type="checkbox" name="like" id="like" checked={data.favorite} onChange={handleCheckboxChange}/>
                                <label htmlFor="like">Like</label>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn add" >Добавить</button>
                    </div>
                </form>
    </>
};

module.exports = Form;