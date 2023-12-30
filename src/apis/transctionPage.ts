import axios from "axios";

const getTransactionData = async (transactionHash: string, func: any) => {
    await axios
        .get(
            `https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/multisig-transactions?query=${transactionHash}`
        )
        .then((response: any) => {
            const { data } = response;
            func(data);
        })
        .catch((error) => console.warn(error));
};

export { getTransactionData };
