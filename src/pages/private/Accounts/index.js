import { Container } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AccountDetails from "./AccountDetails";
import EnvelopeDetails from "./EnvelopeDetails";

const Accounts = (props) => {
    const [currentView, setCurrentView] = useState("accounts");
    const [accountDetails, setAccountDetails] = useState(null);

    useEffect(() => {
        setAccountDetails(props.accountDetails);

        // eslint-disable-next-line
    }, [props.accountDetails]);

    return _.isEmpty(accountDetails) ? null : (
        <Container maxWidth="sm">
            {currentView === "accounts" ? (
                <AccountDetails
                    setCurrentView={setCurrentView}
                    data={_.get(accountDetails, "accounts")}
                />
            ) : currentView === "envelopes" ? (
                <EnvelopeDetails
                    setCurrentView={setCurrentView}
                    envelopes={_.get(accountDetails, "envelopes")}
                />
            ) : null}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        accountDetails: state.accountDetails.accountDetails,
    };
};

export default connect(mapStateToProps, null)(Accounts);
