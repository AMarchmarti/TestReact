import * as React from 'react';

import MuiTabs, { TabsProps as MuiTabsProps } from '@material-ui/core/Tabs';

interface TabsProps extends MuiTabsProps {
	ariaLabel?: string;
	children: React.ReactNode | React.ReactNode[];
	color?: 'primary' | 'secondary' | undefined;
	handleChange: ((event: React.ChangeEvent<{}>, newValue: number) => void) | undefined;
	textColor?: 'inherit' | 'primary' | 'secondary' | undefined;
	value: number;
	variant?: 'scrollable' | 'standard' | 'fullWidth' | undefined;
}

const Tabs = ({
	ariaLabel,
	children,
	color,
	handleChange,
	textColor,
	value,
	variant,
	...props
}: TabsProps): JSX.Element => {
	return (
		<MuiTabs
			value={value}
			onChange={handleChange}
			variant={variant}
			indicatorColor={color || 'primary'}
			textColor={textColor || 'primary'}
			aria-label={ariaLabel}
			{...props}
		>
			{children}
		</MuiTabs>
	);
};

export default Tabs;
