import axios from "axios";

interface Users {
	id: number
	email: string
	name: string
}


const baseURL = () => {
	const apiUrl = process.env.REACT_APP_API_HOST ?
		process.env.REACT_APP_API_HOST : "https://jsonplaceholder.typicode.com";
	return apiUrl;
};

// const getAuthInstance = () => {
// 	const token = authStore.token;
// 	return axios.create({
// 		headers: { "Authorization": `Bearer ${token}`},
// 		baseURL: baseURL(),
// 	});
// };

const getInstance = () => {
	return axios.create({
		baseURL: baseURL(),
	});
};

export const AppClient = {

	async GetUsers(): Promise<Users[]> {
		const authResp = await getInstance().get("/users");
		return authResp.data;
	}

}
