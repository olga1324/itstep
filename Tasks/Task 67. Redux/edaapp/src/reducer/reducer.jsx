const reducer = (state = {}, action) => {
    
    switch(action.type){

        case "INIT":
            return {...state,
                products: action.products,
                user: action.user,
                formError: action.formError,
                lastIdProduct: action.lastIdProduct
            }

        case "PRODUCT_ADD":
            let newId = ++state.lastIdProduct;
            let newProduct = {
                id: newId,
                image: action.product.image,
                name: action.product.name,
                price: action.product.price,
                quantity: action.product.quantity,
                units: action.product.units,
                favorite: action.product.favorite
            };
            return {...state, 
                    products: [...state.products, newProduct],
                    lastIdProduct: newId
                    };

        case "PRODUCT_DELETE":
            return{...state, 
                  products: state.products.filter((item) => item.id != action.productId)
                  };

        case "PRODUCT_LIKE":
            return{...state,
                products: state.products.map((item) => {
                    if (item.id == action.id){
                        item.favorite = true;
                    } 
                    return item;
                })
            };

        case "PRODUCT_DISLIKE":
            return{...state,
                products: state.products.map((item) => {
                    if (item.id == action.id) {
                        item.favorite = false;
                    }
                    return item;
                })
            };

        case "PRODUCT_EDIT":
            break;
        
    }
    return state;
}

module.exports = reducer;