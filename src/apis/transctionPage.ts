import FailureToast from "@/components/global/Toasts/FailureToast";
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
			const keys = Object.keys(data);
			if (keys[0] != "statusCode") {
				func(data);
			} else {
				FailureToast(data?.body?.message);
			}
		})
		.catch((error) => {
			FailureToast(error?.message);
		});
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
		.then((res: any) => {
			const { data } = res;
			const keys = Object.keys(data);
			console.log(keys);
			if (keys[0] == "statusCode") {
				FailureToast(data?.body?.message);
			} else {
				func(data);
			}
		})
		.catch((error) => {
			FailureToast("Request Failed");
		});
};

export { getTransactionData, getModuleTranasction };
