import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { handleFetchAccountDetails } from "./actions/AccountDetailsAction";
import FullPageLoader from "./components/FullPageLoader";
import NavAppBar from "./components/Navbar/NavAppBar";
import IndexRouter from "./routes/IndexRouter";

const App = (props) => {
    useEffect(() => {
        props.fetchAccountDetails();

        // eslint-disable-next-line
    }, []);

    return (
        <Box>
            {props.fetchingAccountDetailsFlag ? <FullPageLoader /> : null}

            <NavAppBar />

            <BrowserRouter>
                <IndexRouter />
            </BrowserRouter>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        accountDetails: state.accountDetails.accountDetails,
        fetchingAccountDetailsFlag: state.accountDetails.loading,
        error: state.accountDetails.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAccountDetails: () => {
            dispatch(handleFetchAccountDetails());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
