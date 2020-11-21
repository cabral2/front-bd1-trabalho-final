import React from "react";

// Local

// Material
import Paper from "@material-ui/core/Paper";
import Form from "./form";
import { Typography } from "@material-ui/core";

const funcionario = ["CPF", "Nome", "Cargo", "Data", "Horas de Voo"];
const aviao = [
    "Modelo",
    "Data Fabricação",
    "Data Última Manutenção",
    "Capacidade",
];

const AppBody = (props) => (
    <Paper elevation={10}>
        {console.log(props.currentPage)}
        {props.currentPage === "home" && (
            <Typography>Seja bem vindo Edson, o Professor.</Typography>
        )}
        {props.currentPage === "funcionarios" && <Form campos={funcionario} />}
        {props.currentPage === "aviao" && <Form campos={aviao} />}
    </Paper>
);

export default AppBody;
