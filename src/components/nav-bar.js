import React from "react";

// Material
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

// Local
import { Divider } from "@material-ui/core";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles(() => ({
    text: {
        width: "62%",
        color: "#dbdbdb",
    },
    buttonText: {
        color: "#c4c4c4",
    },
    menuText: {
        color: "#000000",
    },
    bg: {
        backgroundColor: "#000",
    },
}));

const NavBar = (props) => {
    const styles = useStyles();
    const { changePage, pages } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={styles.bg} position="static">
            <Toolbar>
                <Typography
                    className={styles.text}
                    variant="h4"
                    align="justify"
                >
                    SSS Passagens Aéreas
                </Typography>
                <Divider variant="fullWidth" orientation="horizontal" />
                <Grid container spacing={1} justify="flex-end">
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="white"
                        onClick={handleClick}
                    >
                        Open Menu
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {Object.values(pages).map((page) => (
                            <StyledMenuItem onClick={() => changePage(page)}>
                                <Typography
                                    className={styles.menuText}
                                    variant="button"
                                >
                                    {page}
                                </Typography>
                            </StyledMenuItem>
                        ))}
                    </StyledMenu>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
