import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate, useRoutes} from "react-router";

const NavBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const nav = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                        onClick={() => {
                            nav("/")
                        }}
                    >
                        PracticeAssist
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            <MenuItem
                                key={"home"}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    nav("/")
                                }}
                            >
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem
                                key={"timer"}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    nav("/createTimer")
                                }}
                            >
                                <Typography textAlign="center">Create a Timer</Typography>
                            </MenuItem>
                            <MenuItem
                                key={"exercise"}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    nav("/exercise")
                                }}
                            >
                                <Typography textAlign="center">Practice Exercises</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                        onClick={() => {
                            nav("/")
                        }}
                    >
                        PracticeAssist
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        <Button
                            key={"timer"}
                            onClick={() => {
                                handleCloseNavMenu();
                                nav("/home")
                            }}
                            sx={{my: 2, color: "white", display: "block"}}
                        >
                            Home
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        <Button
                            key={"timer"}
                            onClick={() => {
                                handleCloseNavMenu();
                                nav("/createTimer")
                            }}
                            sx={{my: 2, color: "white", display: "block"}}
                        >
                            Create a Timer
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        <Button
                            key={"exercise"}
                            onClick={() => {
                                handleCloseNavMenu();
                                nav("/exercise")
                            }}
                            sx={{my: 2, color: "white", display: "block"}}
                        >
                            Home
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
