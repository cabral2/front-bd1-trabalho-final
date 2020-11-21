import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Passenger = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Poltrona"
                    variant="outlined"
                    onChange={() => {}}
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Assento"
                    variant="outlined"
                    onChange={() => {}}
                />
            </Grid>

            <Grid item xs={1}>
                <Button variant="contained" color="primary">
                    Salvar
                </Button>
            </Grid>
        </Grid>
    );
};

export default Passenger;
