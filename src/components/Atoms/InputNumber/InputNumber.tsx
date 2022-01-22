import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import keys from '../../../helpers/keys';

interface InputTextProps {
	disabled?: boolean;
	editValue: string | number | undefined;
	id: string | undefined;
	label?: string | undefined;
	ariaLabel?: string | undefined;
	placeholder?: string;
	variant: 'standard' | 'filled' | 'outlined' | undefined;
	setter: (value: any) => void;
}

const InputNumber = ({
	ariaLabel,
	editValue,
	disabled,
	setter,
	id,
	label,
	placeholder,
	variant,
}: InputTextProps): JSX.Element => {
	const [state, setState] = React.useState<string | number | undefined>(editValue);
	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = target;
		setState(value);
	};

	const handleBlur = (): void => {
		if (state !== editValue && !!state) {
			setter(state);
		}
	};

	return (
		<TextField
			id={id}
			label={label}
			value={state}
			placeholder={placeholder || ''}
			aria-label={ariaLabel}
			variant={variant}
			onChange={handleChange}
			onBlur={handleBlur}
			type="number"
			disabled={disabled}
			onKeyDown={(event) => {
				if (keys.KEY_TAB === event.key || keys.KEY_ENTER === event.key) {
					handleBlur();
				}
			}}
		/>
	);
};

export default InputNumber;
