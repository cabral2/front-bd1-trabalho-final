import axios from "axios";

const get = async (table) => {
    return axios
        .get(`http://179.179.222.111:150/TrabBD/api/${table}`)
        .then((res) => {
            return res ? res.data : null;
        });
};

export { get };
