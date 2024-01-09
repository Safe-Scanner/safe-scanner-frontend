import axios from "axios";

const getTransactionData = async (
	transactionHash: string,
	network: string,
	func: any
) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/multisig-transactions?query=${transactionHash}&network=${network}`
		)
		.then((response: any) => {
			const { data } = response;
			func(data);
		})
		.catch((error) => console.warn(error));
};

const getModuleTranasction = async (
	query: string,
	network: string,
	func: any
) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/module-transaction?query=${query}&network=${network}`
		)
		.then((res) => {
			func(res.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { getTransactionData, getModuleTranasction };
