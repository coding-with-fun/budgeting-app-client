import { Box, Button, TextField, Typography } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";

const AccountDetails = ({ setCurrentView, data }) => {
    const [detailsChanged, setDetailsChanged] = useState(false);
    const [accounts, setAccounts] = useState({});

    useEffect(() => {
        setAccounts(data);
    }, [data]);

    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        if (detailsChanged)
            window.addEventListener("beforeunload", unloadCallback);

        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, [detailsChanged]);

    const handleChangeDetails = (event, key, field, list) => {
        setDetailsChanged(true);
        let input = _.get(event, "target.value");

        const checkNumberRegex = new RegExp(/^\d+$/);
        if (field === "balance" && input && !checkNumberRegex.test(input)) {
            return true;
        }

        if (field === "balance" && input.charAt(0) === "0") {
            input = input.substring(1);
        }

        const localAccountData = { ...accounts };
        localAccountData[list][key][field] = input;

        setAccounts({ ...localAccountData });
    };

    const AccountsList = ({ list, listName }) => {
        return list.map((account) => {
            return (
                <Box
                    key={_.get(account, "key")}
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        my: "1rem",
                    }}
                >
                    <TextField
                        variant="outlined"
                        value={_.get(account, "title")}
                        sx={{
                            flex: 1,
                        }}
                        onChange={(event) =>
                            handleChangeDetails(
                                event,
                                _.get(account, "key"),
                                "title",
                                listName
                            )
                        }
                        fullWidth
                    />

                    <TextField
                        variant="outlined"
                        value={_.get(account, "balance")}
                        sx={{
                            flex: 0.5,
                        }}
                        onChange={(event) =>
                            handleChangeDetails(
                                event,
                                _.get(account, "key"),
                                "balance",
                                listName
                            )
                        }
                        fullWidth
                    />
                </Box>
            );
        });
    };

    return _.isEmpty(accounts) ? null : (
        <Box>
            <Box
                sx={{
                    my: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4" component="div">
                    Add/Edit Accounts
                </Typography>

                <Button
                    variant="outlined"
                    onClick={() => setCurrentView("envelopes")}
                >
                    Envelope
                </Button>
            </Box>

            <Box>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        mb: 2,
                    }}
                >
                    Savings
                </Typography>
                {AccountsList({ list: accounts.savings, listName: "savings" })}
            </Box>
        </Box>
    );
};

export default AccountDetails;
