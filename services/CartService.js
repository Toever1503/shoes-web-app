import Axios from './conf/Axios';

const basePath = '/gio-hang'

const addProduct = (payload) => Axios.post(`${basePath}`, payload);
const removeProduct = (id) => Axios.del(`${basePath}/remove-item/${id}`);

export default {
    addProduct,
    removeProduct
};