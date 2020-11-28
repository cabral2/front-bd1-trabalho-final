import React, { useEffect, useState } from "react";
import axios from "axios";
// Local
import { pages } from "./lib";
import { funcionario, aviao } from "./lib";
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
            {currentPage === "home" && <Typography>Seja bem vindo</Typography>}

            {currentPage === "funcionario" && (
                <Table campos={funcionario} page={currentPage} />
            )}

            {currentPage === "aviao" && <Table campos={aviao} />}
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
                <Form title={currentPage} campos={funcionario} />
            </Modal>
        </Paper>
    );
};

export default AppBody;
