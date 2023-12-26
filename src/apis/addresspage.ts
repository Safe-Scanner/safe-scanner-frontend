import { storebalances } from "../store/feature/balancesSlice";
import axios from "axios";

const balanceApi = async (
	safe: string,
	network: string,
	func: any,
	dispatch: any
) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/wallet?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			func(response.data);
		})
		.catch((error) => console.warn(error));
};

const transactionApi = async (safe: string, func: any, dispatch: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/all_transactions?query=${safe}`
		)
		.then((response: any) => {
			func(response.data);
		})
		.catch((error) => console.warn(error));
};

const balancesApi = async (
	safe: string,
	network: string,
	func: any,
	dispatch: any
) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/balances?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			console.log(response);
			func(response.data);
			// dispatch(storebalances(response.data));
		})
		.catch((error) => {
			console.warn(error);
		});
};

export { balanceApi, transactionApi, balancesApi };
