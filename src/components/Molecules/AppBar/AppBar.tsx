import * as React from 'react';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar';
import { PropTypes } from '@material-ui/core';

interface AppBarProps extends MuiAppBarProps {
	children: React.ReactNode;
	position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative' | undefined;
	color: PropTypes.Color | 'transparent' | undefined;
}

const AppBar = ({ children, position, color, ...props }: AppBarProps): JSX.Element => {
	return (
		<MuiAppBar position={position} color={color} {...props}>
			{children}
		</MuiAppBar>
	);
};

export default AppBar;
