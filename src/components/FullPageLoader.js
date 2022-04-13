import { Box, CircularProgress } from "@mui/material";
import React from "react";

const FullPageLoader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(128,128,128,0.5)",
                zIndex: 99,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default FullPageLoader;
