import Axios from './conf/Axios';

const basePath = '/payment';
const checkout = (payload) => Axios.post(`${basePath}/dat-hang`, payload);
const getDetailOrder = (id) => Axios.get(`${basePath}/chi-tiet-don-hang/${id}`);

export default {
    checkout,
    getDetailOrder
};