import FailureToast from "@/components/global/Toasts/FailureToast";
import axios from "axios";

const prefix = process.env.NEXT_PUBLIC_API_PREFIX;

const searchBar = async (
	searchString: any,
	func: any,
	load: any,
	anchor: any
) => {
	load(true); // set loading to true
	await axios
		.get(`${prefix}/v1/search?query=${searchString}`)
		.then((response: any) => {
			const { data } = response;
			let keys = Object.keys(data);
			load(false);
			if (keys[0] == "statusCode") {
				FailureToast(data.body.message);
				load((prev: any) => !prev);
				// anchor((prev: any) => !prev);
				func({});
			} else {
				func(data);
				load((prev: any) => !prev);
			}
		})
		.catch((error: any) => {
			FailureToast(error.message);
			load(false);
			anchor((prev: any) => !prev);
		});
};

export { searchBar };
