import React from "react";
import { Route, Routes } from "react-router-dom";
import { Accounts, Dashboard } from "../pages";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/accounts" element={<Accounts />}></Route>
        </Routes>
    );
};

export default IndexRouter;
