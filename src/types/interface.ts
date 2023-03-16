interface User {
	username: string;
	email: string;
	password: string;
}

interface User {
	login: () => void;
	logout: () => void;
}

enum LEVEL {
	// EMPLOY,
	MANAGER,
}

interface Admin extends User {
	is_admin: boolean;
	role: LEVEL.MANAGER;
}

/*
differences interface & type alias
-> interface: mở rộng được
-> type alias: không mở rộng được
*/

type User1 = {
	username: string;
	email: string;
	password: string;
};
