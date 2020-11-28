import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { post } from "../api";

const Form = (props) => {
    const { title, campos, isUpdate } = props;

    const onSubmit = (data) => {
        console.log(data);
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
                Adicionar um {title}
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
                        fullWidth
                        size="small"
                        placeholder={item.name}
                        variant="outlined"
                        onChange={() => {}}
                    />
                </Grid>
            ))}

            <Grid item xs={12}>
                <Button
                    onClick={() =>
                        post("funcionario", {
                            cpf: "04400455335",
                            nome: "Lucca Miranda",
                            cargo: "piloto",
                            dataContratacao: "06/03/1999",
                            hrVoo: 3000,
                        })
                    }
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
