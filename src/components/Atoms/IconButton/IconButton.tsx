import * as React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';

interface IconButtonProps {
	ariaLabel?: string;
	className?: string | undefined;
	color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
	disabled?: boolean;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	icon: JSX.Element;
	id?: string;
}

const IconButton = ({ id, handleClick, icon, disabled, className, color, ariaLabel }: IconButtonProps) => {
	return (
		<MuiIconButton
			aria-label={ariaLabel}
			className={className}
			color={color}
			disabled={disabled}
			id={id}
			onClick={handleClick}
		>
			{icon}
		</MuiIconButton>
	);
};

export default IconButton;
