import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Form = (props) => {
    const { title, campos } = props;

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
            <form onSubmit={() => {}}>
                {campos.map((item) => (
                    <Grid
                        style={{
                            marginBottom: "10px",
                        }}
                        key={item}
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder={item}
                            variant="outlined"
                            onChange={() => {}}
                        />
                    </Grid>
                ))}
            </form>

            <Grid item xs={12}>
                <Button
                    onClick={() => onSubmit("salve")}
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
