import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
        </Routes>
    );
};

export default IndexRouter;
