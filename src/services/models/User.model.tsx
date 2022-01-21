interface Address {
	city: string;
	geo: { lat: string; lng: string };
	street: string;
	suite: string;
	zipcode: string | number;
}

interface Company {
	bs: string;
	catchPhrase: string;
	name: string;
}

export interface User {
	address: Address;
	company: Company;
	email: string;
	id: string;
	name: string;
	phone: string;
	username: string;
	website: string;
}
