import React from 'react';

import Box from '@material-ui/core/Box';

interface PanelProps {
	ariaLabelledBy?: string;
	children?: React.ReactNode;
	id: string;
	index: any;
	role: string;
	value: any;
}

const Panel = (props: PanelProps): JSX.Element => {
	const { children, value, index, id, role, ariaLabelledBy, ...other } = props;

	return (
		<div role={role} hidden={value !== index} id={id} aria-labelledby={ariaLabelledBy} {...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
};

export default Panel;
