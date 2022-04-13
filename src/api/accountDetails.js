import axios from "axios";
import SampleData from "../data/AccountDetails.json";

// TODO: Remove the waiting
// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchAccountDetails = async () => {
    await axios.get("https://dummyjson.com/users", {
        headers: {
            Accept: "application/json",
        },
    });

    // TODO: Remove the waiting
    // await delay(5000);

    return SampleData;
};
