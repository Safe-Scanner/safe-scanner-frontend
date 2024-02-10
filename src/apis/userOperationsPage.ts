import axios from "axios";
import FailureToast from "@/components/global/Toasts/FailureToast";

const prefix = process.env.NEXT_PUBLIC_API_PREFIX;

export const userOperationApi = async (
	query: string,
	network: string,
	func: any
) => {
	await axios
		.get(`${prefix}/v1/transaction?hash=${query}&network=${network}`)
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
