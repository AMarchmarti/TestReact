import * as React from 'react';
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';

interface IconButtonProps extends MuiIconButtonProps {
	ariaLabel?: string;
	className?: string | undefined;
	color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
	disabled?: boolean;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	icon: JSX.Element;
	id?: string;
}

const IconButton = ({
	id,
	handleClick,
	icon,
	disabled,
	className,
	color,
	ariaLabel,
	...props
}: IconButtonProps): JSX.Element => {
	return (
		<MuiIconButton
			aria-label={ariaLabel}
			className={className}
			color={color}
			disabled={disabled}
			id={id}
			onClick={handleClick}
			{...props}
		>
			{icon}
		</MuiIconButton>
	);
};

export default IconButton;
