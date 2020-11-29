import axios from "axios";
import { pages } from "../components/lib";

const ipdoiury = "179.179.222.111";

const get = async (table) =>
    axios.get(`http://${ipdoiury}:150/TrabBD/api/${table}`).then((res) => {
        return res ? res.data : null;
    });

const post = async (table, formData) => {
    let url = `http://${ipdoiury}:150/TrabBD/api/${table}/insert?`;

    for (const [key, value] of Object.entries(formData)) {
        url = url.concat(`&${key}=${value}`);
    }

    return axios.post(url);
};

const remove = async (table, id) => {
    let url = `http://${ipdoiury}:150/TrabBD/api/${table}/delete?id=${id}`;

    if (table === pages.PASSAGEIRO || table === pages.FUNCIONARIO)
        url = `http://${ipdoiury}:150/TrabBD/api/${table}/delete?cpf=${id}`;

    return axios.delete(url);
};

export { get, post, remove };
