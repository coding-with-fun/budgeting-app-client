import { ACCOUNT_DETAILS_CONSTANT } from "../utils/constants";

const InitialState = {
    accountDetails: {},
    loading: false,
    error: false,
};

const AccountDetailsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_STARTED: {
            return {
                ...state,
                loading: true,
            };
        }

        case ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }

        case ACCOUNT_DETAILS_CONSTANT.FETCH_ACCOUNT_DETAILS_SUCCESS: {
            return {
                ...state,
                accountDetails: {
                    ...state.accountDetails,
                    ...action.payload,
                },
                loading: false,
                error: false,
            };
        }

        default: {
            return state;
        }
    }
};

export default AccountDetailsReducer;
