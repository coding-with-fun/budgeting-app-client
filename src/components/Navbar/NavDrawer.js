import React from "react";
import {
    List,
    ListItemText,
    ListItemIcon,
    ListItem,
    Divider,
    Drawer,
    Box,
} from "@mui/material";
import {
    Mail as MailIcon,
    MoveToInbox as InboxIcon,
} from "@mui/icons-material";

const NavDrawer = ({ isOpen, handleDrawer }) => {
    return (
        <div>
            <Drawer anchor="left" open={isOpen} onClose={handleDrawer}>
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={handleDrawer}
                    onKeyDown={handleDrawer}
                >
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default NavDrawer;
