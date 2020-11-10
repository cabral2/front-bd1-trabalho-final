import React, { useState } from "react";

// Local

// Material
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AppBody = (props) => {
  return (
    <>
      <Paper>
        <Typography variant="h4">Home</Typography>
        {/* Filter fields */}
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <TextField
              fullWidth
              size="small"
              value="Hello World"
              variant="outlined"
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              size="small"
              value="Hello World"
              variant="outlined"
              onChange={() => {}}
            />
          </Grid>

          {/* Filter buttons */}
          <Grid item xs={1}>
            <Button variant="contained" color="primary">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AppBody;
