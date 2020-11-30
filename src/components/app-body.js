import React, { useState } from "react";
// Local
import {
    funcionario,
    aviao,
    passageiro,
    localizacao,
    passagem,
    tripulacao,
    viagem,
} from "./lib";
import { pages } from "./lib";
// Material
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Form from "./form";
import Table from "./table";

const fields = {
    funcionario,
    aviao,
    passageiro,
    localizacao,
    passagem,
    tripulacao,
    viagem,
    home: [],
};

const AppBody = (props) => {
    const { currentPage } = props;
    let campos = fields[currentPage];

    const emptyForm = {};
    for (const campo of campos) {
        emptyForm[`${campo.prop}`] = "";
    }
    const [open, setOpen] = useState(false);
    const [editionFormFields, setEditionFormFields] = useState(emptyForm);
    const [auxUpdateTable, setAuxUpdateTable] = useState(0);

    const handleEdit = (formData) => {
        setEditionFormFields(formData);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditionFormFields(emptyForm);
        setAuxUpdateTable(Math.random());
    };

    return (
        <Paper elevation={10}>
            <Typography variant="h4" style={{ padding: "20px 0" }}>
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </Typography>
            {currentPage !== pages.HOME ? (
                <>
                    <Table
                        campos={fields[currentPage]}
                        page={currentPage}
                        auxUpdateTable={auxUpdateTable}
                        handleEdit={handleEdit}
                    />

                    <IconButton
                        onClick={() => setOpen(true)}
                        aria-label={`add new ${currentPage}`}
                    >
                        <AddCircleIcon style={{ marginRight: "10px" }} />
                        Adicionar {currentPage}
                    </IconButton>
                </>
            ) : (
                <img
                    alt="peixe"
                    height="100%"
                    width="100%"
                    src="https://cdn.dribbble.com/users/3451272/screenshots/7114465/media/9d8d4b08b3bfc07d7729abd12032373f.jpg"
                />
            )}

            <Modal
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Form
                    page={currentPage}
                    campos={campos}
                    closeModal={() => handleClose()}
                    editionFormFields={editionFormFields}
                />
            </Modal>
        </Paper>
    );
};

export default AppBody;
