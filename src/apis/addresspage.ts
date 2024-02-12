import FailureToast from "@/components/global/Toasts/FailureToast";
import axios from "axios";
import "dotenv";

const prefix = process.env.NEXT_PUBLIC_API_PREFIX;

const balanceApi = async (
	safe: string,
	network: string,
	func: any,
	load: any
) => {
	load((prev: any) => !prev);
	await axios
		.get(`${prefix}/v1/wallet?query=${safe}&network=${network}`)
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
		.get(`${prefix}/v1/all_transactions?query=${safe}&network=${network}`)
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
		.get(`${prefix}/v1/balances?query=${safe}&network=${network}`)
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
export const userOPWallet = async (
	safe: string,
	network: string,
	func: any
) => {
	await axios
		.get(`${prefix}/v1/user_ops?safe=${safe}&network=${network}`)
		.then((response: any) => {
			const { data } = response;
			console.log("User op Data is ", data);
			func(data);
		})
		.catch((error: any) => {
			console.log(error);
		});
};

export { balanceApi, transactionApi, balancesApi };
