const addProduct = (product) => {
    return {
        type: "PRODUCT_ADD",
        product
    }
};

const deleteProduct = (productId) => {
    return {
        type: "PRODUCT_DELETE",
        productId
    }
};

const editProduct = (id, product) => {
    return {
        type: "PRODUCT_EDIT",
        id,
        product
    }
};

const likeProduct = (id) => {
    return {
        type: "PRODUCT_LIKE",
        id
    }
}

const disLikeProduct = (id) => {
    return {
        type: "PRODUCT_DISLIKE",
        id
    }
}



module.exports = { addProduct, deleteProduct, editProduct, likeProduct, disLikeProduct, };