import FailureToast from "@/components/global/Toasts/FailureToast";
import axios from "axios";

const searchBar = async (
	searchString: any,
	func: any,
	load: any,
	anchor: any
) => {
	load((prev: any) => !prev);
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/search?query=${searchString}`
		)
		.then((response: any) => {
			const { data } = response;
			let keys = Object.keys(data);
			if (keys[0] == "statusCode") {
				FailureToast(data.body.message);
				load((prev: any) => !prev);
				anchor((prev: any) => !prev);
			} else {
				func(data);
				load((prev: any) => !prev);
			}
		})
		.catch((error: any) => {
			FailureToast(error.message);
		});
};

export { searchBar };
