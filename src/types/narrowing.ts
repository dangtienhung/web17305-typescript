const checkAuth = (user: User | Admin) => {
	if ('isAuthAdmin' in user) {
		console.log('welcome to admin');
	} else {
		console.log('welcome to user');
	}
};
