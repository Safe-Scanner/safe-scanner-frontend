import axios from "axios";

const searchBar = async (searchString: any, func: any) => {
	await axios
		.get(
			`https://oyzii5yqy5.execute-api.us-east-2.amazonaws.com/dev/v1/search?query=${searchString}`
		)
		.then((response: any) => {
			const { data } = response;
			func(data);
		})
		.catch((error) => console.warn(error));
};

export { searchBar };
