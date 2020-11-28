import axios from "axios";

const ipdoiury = "179.179.222.111";

const get = async (table) =>
    axios.get(`http://${ipdoiury}:150/TrabBD/api/${table}`).then((res) => {
        return res ? res.data : null;
    });

const post = (table, obj) => {
    let url = `http://${ipdoiury}:150/TrabBD/api/${table}/insert?`;
    //cpf=${obj.cpf}&nome=${obj.nome}&cargo=${obj.cargo}&dataContratacao=${obj.dataContratacao}&hrVoo=${obj.hrVoo}
    url = url.concat(Object.values(obj).map((item) => item));

    console.log(url);

    /* var config = {
        method: "POST",
        headers: new Headers(),
        mode: "cors",
        cache: "default",
    };

    fetch(url, config)
        .then((response) => console.log(response))
        .catch((err) => console.error(err)); */
};

export { get, post };
