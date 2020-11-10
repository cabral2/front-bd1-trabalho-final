import React from "react";

// Material
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// Local
import MenuImage from "../assets/menu/test.jpg";

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar src={MenuImage} />
          <Grid container spacing={1} justify="flex-end">
            <Grid item xs={1}>
              <Typography variant="h6">Home</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">Crud1</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">Crud2</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
