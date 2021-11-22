import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users"

const privatePaths = [
	{
		path: "/",
		component: Home,
		exact: true
	},
	{
		path: "/users",
		component: Users,
		exact: true
	},
];

export default privatePaths;