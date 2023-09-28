import address from '../../data/address_vn'

const state = {
};


// getters 
const getters = {
};

// actions 
const actions = {
    getProvinces: (state, payload) => {
        const { p } = payload;
        let dataResponse = [];
        let hasP = false;

        if (p) {
            if (!isNaN(p)) {
                hasP = true;
                dataResponse = address.filter((item) => item.code == p);
            }
        }
        if (!hasP)
            dataResponse = address.map(
                item =>
                ({
                    code: item.code,
                    name: item.name
                })
            );

        return dataResponse;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions
};