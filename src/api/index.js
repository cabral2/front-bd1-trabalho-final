import axios from "axios";
import { pages } from "../components/lib";

const ipdoiury = "179.178.166.7";

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

    if (table === pages.PASSAGEM)
        url = `http://${ipdoiury}:150/TrabBD/api/${table}/delete?passageiroCPF=${
            id.split("/")[0]
        }&viagemId=${id.split("/")[1]}`;

    return axios.delete(url);
};

const update = async (table, id, formData) => {
    let url = `http://${ipdoiury}:150/TrabBD/api/${table}/update?`;

    if (table === pages.PASSAGEIRO || table === pages.FUNCIONARIO)
        url = `http://${ipdoiury}:150/TrabBD/api/${table}/update?cpf=${id}`;

    if (table === pages.PASSAGEM)
        url = `http://${ipdoiury}:150/TrabBD/api/${table}/update?passageiroCPF=${
            id.split("/")[0]
        }&viagemId=${id.split("/")[1]}`;

    for (const [key, value] of Object.entries(formData)) {
        url = url.concat(`&${key}=${value}`);
    }

    return axios.put(url, formData);
};

export { get, post, remove, update };
