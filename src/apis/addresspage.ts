import FailureToast from "@/components/global/Toasts/FailureToast";
import axios from "axios";

const balanceApi = async (
	safe: string,
	network: string,
	func: any,
	load: any
) => {
	load((prev: any) => !prev);
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/wallet?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			if (keys[0] != "statusCode") {
				func((prev: any) => response.data);
			} else {
				FailureToast(`${response?.data?.body?.message} for balances request`);
			}
			load((prev: any) => !prev);
		})
		.catch((error) => {
			console.warn(error);
			load((prev: any) => !prev);
		});
};

const transactionApi = async (safe: string, network: string, func: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/all_transactions?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			if (keys[0] != "statusCode") {
				func((prev: any) => response.data);
			} else {
				FailureToast(
					`${response?.data?.body?.message} for transactions request`
				);
			}
		})
		.catch((error) => console.warn(error));
};

const balancesApi = async (safe: string, network: string, func: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/balances?query=${safe}&network=${network}`
		)
		.then((response: any) => {
			const keys = Object.keys(response.data);
			if (keys[0] != "statusCode") {
				func((prev: any) => response.data);
			} else {
				FailureToast(
					`${response?.data?.body?.message} for transactions balances`
				);
			}
		})
		.catch((error) => {
			console.warn(error);
		});
};

export { balanceApi, transactionApi, balancesApi };
