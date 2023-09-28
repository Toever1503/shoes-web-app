import Axios from './conf/Axios';

const basePath = '/payment';
const checkout = (payload) => Axios.post(`${basePath}/dat-hang`, payload);

export default {
    checkout
};