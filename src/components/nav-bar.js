import React from "react";

// Material
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// Local
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    text: {
        width: "62%",
        color: "pink",
    },
    buttonText: {
        color: "#bdbdbd",
    },
}));

const NavBar = (props) => {
    const styles = useStyles();
    const { changePage, pages } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    className={styles.text}
                    variant="h3"
                    align="justify"
                >
                    SSS Passagens Aéreas
                </Typography>
                <Divider variant="fullWidth" orientation="horizontal" />
                <Grid container spacing={1} justify="flex-end">
                    {pages.map((page) => (
                        <Grid key={page} item xs={"auto"}>
                            <Button onClick={() => changePage(page)}>
                                <Typography
                                    className={styles.buttonText}
                                    variant="button"
                                >
                                    {page}
                                </Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
