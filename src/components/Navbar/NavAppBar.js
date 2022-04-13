import { Menu as MenuIcon } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import NavDrawer from "./NavDrawer";

const NavAppBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawer = () => setIsDrawerOpen((prevState) => !prevState);

    return (
        <Fragment>
            <NavDrawer isOpen={isDrawerOpen} handleDrawer={handleDrawer} />

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                            }}
                            onClick={() => handleDrawer()}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            News
                        </Typography>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    );
};

export default NavAppBar;
