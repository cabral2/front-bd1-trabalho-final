import React, { useEffect, useState } from "react";
import axios from "axios";
// Local
import { pages } from "./lib";
import { funcionario } from "./lib";
// Material
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import Form from "./form";

const AppBody = (props) => {
    const { currentPage } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios
            .get("http://177.157.173.169:150/TrabBD/api/viagem")
            .then((response) => {
                console.log(response);
            });

        /* axios
            .get("https://api.github.com/users/cabral2")
            .then(function (response) {
                console.log(response.data);
               
                console.log(response.status); // ex.: 200
            }); */
    });

    return (
        <Paper elevation={10}>
            <Typography gutterBottom variant="h4">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </Typography>
            {props.currentPage === pages.HOME && (
                <Typography>Seja bem vindo</Typography>
            )}
            <button type="button" onClick={() => setOpen(true)}>
                Adicionar um {currentPage}
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Form title={currentPage} campos={funcionario} />
            </Modal>
        </Paper>
    );
};

export default AppBody;
