import FailureToast from "@/components/global/Toasts/FailureToast";
import axios from "axios";

const prefix = process.env.NEXT_PUBLIC_API_PREFIX;

const searchBar = async (
	searchString: any,
	func: any,
	load: any,
	anchor: any
) => {
	load((prev: any) => !prev);
	await axios
		.get(
			`${prefix}/v1/search?query=${searchString}`
		)
		.then((response: any) => {
			const { data } = response;
			let keys = Object.keys(data);
			load((prev: any) => !prev);
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
			load((prev: any) => !prev);
			anchor((prev: any) => !prev);
		});
};

export { searchBar };
