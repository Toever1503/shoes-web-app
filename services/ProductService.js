import Axios from './conf/Axios';


const basePath = '/san-pham/public'

const locSp = (payload, page = 0, size = 10) => Axios.post(`${basePath}?page=${page}&size=${size}&sort=id,desc`, payload);

export default {
    locSp
};