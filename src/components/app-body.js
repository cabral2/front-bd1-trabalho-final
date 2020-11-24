import React, { useEffect } from "react";
import axios from "axios";
// Local
import { pages } from "./lib";
import { funcionario, aviao } from "./lib";
// Material
import Paper from "@material-ui/core/Paper";
import Form from "./form";
import { Typography } from "@material-ui/core";

const AppBody = (props) => {
    const { currentPage } = props;

    useEffect(() => {
        axios
            .get("http://177.157.173.169:150/TrabBD/api/viagem")
            .then((response) => {
                console.log(response);
            });

        /* axios
            .get("https://api.github.com/users/daviemediato")
            .then(function (response) {
                console.log(response.data);
                setPhotoURL(response.data.avatar_url); // ex.: { user: 'Your User'}
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
            {props.currentPage === pages.FUNCIONARIOS && (
                <Form campos={funcionario} />
            )}
            {props.currentPage === pages.AVIAO && <Form campos={aviao} />}
        </Paper>
    );
};

export default AppBody;
