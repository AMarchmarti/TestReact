import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Context {
	loading: boolean;
	setLoading: (value: boolean) => void;
}

export const Context = React.createContext({} as Context);

export const Provider: React.FC<any> = ({ children }): JSX.Element => {
	const [loading, setLoading] = React.useState<boolean>(false);

	const values: Context = {
		loading,
		setLoading,
	};
	return <Context.Provider value={values}>{children}</Context.Provider>;
};

Provider.propTypes = {
	children: PropTypes.any,
};
