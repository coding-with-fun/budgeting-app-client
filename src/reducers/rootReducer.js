import { combineReducers } from "redux";
import AccountDetailsReducer from "./AccountDetailsReducer";

export default combineReducers({
    accountDetails: AccountDetailsReducer,
});
