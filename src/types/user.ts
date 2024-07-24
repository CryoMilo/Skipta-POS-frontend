export interface User {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	createdAt: string; // ISO 8601 date string
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface UserFormValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
