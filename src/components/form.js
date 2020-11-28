import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = (props) => {
    return (
        <Grid container spacing={1}>
            {props.campos.map((item) => (
                <Grid key={item.name} item xs={2}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder={item.name}
                        variant="outlined"
                        onChange={() => {}}
                    />
                </Grid>
            ))}

            <Grid item xs={1}>
                <Button
                    onClick={() => console.log("dispara o role pro backend")}
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
