import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { post } from "../api";

const Form = (props) => {
    const { page, campos, closeModal, editionFormFields } = props;

    const [formState, setFormState] = useState(editionFormFields);

    const buildPost = () => {
        let formResult = {};
        for (const campo of campos) {
            formResult[`${campo.prop}`] = formState[`${campo.prop}`];
        }
        post(page, formResult).then(() => closeModal());
    };

    return (
        <Grid
            style={{
                padding: "30px",
                width: "500px",
                margin: "auto",
                borderRadius: "40px",
                backgroundColor: "#fff",
            }}
            direction="column"
            justify="center"
            container
            spacing={1}
        >
            <Typography gutterBottom variant="h4">
                Adicionar um {page}
            </Typography>
            {campos.map((item) => (
                <Grid
                    style={{
                        marginBottom: "10px",
                    }}
                    key={item.name}
                    item
                    xs={12}
                >
                    <TextField
                        disabled={!formState && item.prop === "cpf"}
                        fullWidth
                        size="small"
                        placeholder={item.name}
                        variant="outlined"
                        onChange={(event) =>
                            setFormState((prevState) => ({
                                ...prevState,
                                [item.prop]: event.target.value,
                            }))
                        }
                        value={formState[item.prop]}
                    />
                </Grid>
            ))}

            <Grid item xs={12}>
                <Button
                    onClick={() => buildPost()}
                    variant="contained"
                    color="primary"
                >
                    Salvar
                </Button>
            </Grid>
        </Grid>
    );
};

export default Form;
