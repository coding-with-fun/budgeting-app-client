import { fetchAccountDetails } from "../api/accountDetails";
import { ACCOUNT_DETAILS_CONSTANT } from "../utils/constants";

export const handleFetchAccountDetails = () => {
    return (dispatch) => {
        dispatch(fetchAccountDetailsStarted());

        fetchAccountDetails()
            .then((response) => {
                dispatch(fetchAccountDetailsSuccess(response));
            })
            .catch((error) => {
                dispatch(fetchAccountDetailsError(error.message));
            });
    };
};

export const fetchAccountDetailsStarted = () => {
    return {
        type: ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_STARTED,
    };
};

export const fetchAccountDetailsSuccess = (accountDetails) => {
    return {
        type: ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_SUCCESS,
        payload: {
            ...accountDetails,
        },
    };
};

export const fetchAccountDetailsError = (error) => {
    return {
        type: ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_ERROR,
        payload: {
            error,
        },
    };
};
