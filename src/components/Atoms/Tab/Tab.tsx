import * as React from 'react';

import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab';

interface TabProps extends MuiTabProps {
	icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
	ariaControls: string;
	id?: string | undefined;
	label: string;
}

const Tab = ({ icon, ariaControls, id, label, ...props }: TabProps): JSX.Element => {
	return <MuiTab label={label} icon={icon} id={id} aria-controls={ariaControls} {...props} />;
};

export default Tab;
