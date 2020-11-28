import axios from "axios";

const getAllFuncionarios = async function () {
    return axios
        .get(`http://179.179.222.111:150/TrabBD/api/funcionario`)
        .then((res) => {
            return res ? res.data : null;
        });
};

export { getAllFuncionarios };
