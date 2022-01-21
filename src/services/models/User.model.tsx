interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string | number;
	geo: {
		lat: string;
		lng: string;
	};
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: string;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}