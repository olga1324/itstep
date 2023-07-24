const superagentPromise = require("superagent-promise");
const _superagent = require("superagent");

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000';

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const User = {
    current: () =>
        requests.get("/user") 
}

const Products = {
    all: () =>
        requests.get("/products"),
    get: (id) =>
        requests.get(`/products/${id}`),
    delete: (id) =>
        requests.del(`/products/${id}`),
    create: (product) =>
        requests.post("/products", {product}),
    update: (product) =>
        requests.put(`/products/${product.id}`, {product}),
}


module.exports = {User, Products}