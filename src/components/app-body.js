import React from "react";

// Local

// Material
import Paper from "@material-ui/core/Paper";
import Form from "./form";
import Table from "./table";
import { Typography } from "@material-ui/core";

const funcionario = [
    { name: "CPF", prop: "cpf" },
    { name: "Nome", prop: "nome" },
    { name: "Cargo", prop: "cargo" },
    { name: "Data de Contratação", prop: "dataContratacao" },
    { name: "Horas de Voo", prop: "hrVoo" },
];
const aviao = [
    "Modelo",
    "Data Fabricação",
    "Data Última Manutenção",
    "Capacidade",
];

const AppBody = (props) => (
    <Paper elevation={10}>
        {props.currentPage === "home" && (
            <Typography>Seja bem vindo Edson, o Professor.</Typography>
        )}
        {props.currentPage === "funcionarios" && (
            <>
                <Form campos={funcionario} />
                <Table campos={funcionario} />
            </>
        )}
        {/* {props.currentPage === "aviao" && (
            <>
                <Form campos={aviao} />
                <Table campos={aviao} />
            </>
        )} */}
    </Paper>
);

export default AppBody;
