import axios from "axios";

const getAllFuncionarios = async function () {
    axios
        .get(`http://179.179.222.111:150/TrabBD/api/funcionario`)
        .then((res) => {
            console.log(res);
        });
};

export { getAllFuncionarios };
