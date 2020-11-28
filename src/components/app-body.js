import React, { useEffect, useState } from "react";
import axios from "axios";
// Local
import { pages } from "./lib";
import {
    funcionario,
    aviao,
    passageiro,
    localizacao,
    passagem,
    tripulacao,
    viagem,
} from "./lib";
// Material
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import Form from "./form";
import Table from "./table";

const AppBody = (props) => {
    const { currentPage } = props;
    const [open, setOpen] = useState(false);

    return (
        <Paper elevation={10}>
            <Typography gutterBottom variant="h4">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </Typography>

            {/* Depends On Page */}
            {currentPage === pages.HOME && (
                <Typography>Seja bem vindo</Typography>
            )}

            {currentPage === pages.FUNCIONARIO && (
                <Table campos={funcionario} page={currentPage} />
            )}

            {currentPage === pages.AVIAO && (
                <Table campos={aviao} page={currentPage} />
            )}

            {currentPage === pages.PASSAGEIRO && (
                <Table campos={passageiro} page={currentPage} />
            )}

            {currentPage === pages.VIAGEM && (
                <Table campos={viagem} page={currentPage} />
            )}

            {currentPage === pages.LOCALIZACAO && (
                <Table campos={localizacao} page={currentPage} />
            )}

            {currentPage === pages.PASSAGEM && (
                <Table campos={passagem} page={currentPage} />
            )}

            {currentPage === pages.TRIPULACAO && (
                <Table campos={tripulacao} page={currentPage} />
            )}
            {/* Depends On Page */}

            <button type="button" onClick={() => setOpen(true)}>
                Adicionar um {currentPage}
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Form
                    title={currentPage}
                    campos={funcionario}
                    isUpdate={false}
                />
            </Modal>
        </Paper>
    );
};

export default AppBody;
