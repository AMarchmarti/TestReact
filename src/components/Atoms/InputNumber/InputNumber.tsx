import { TextField } from '@material-ui/core';
import * as React from 'react';
import keys from '../../../helpers/keys';

interface InputTextProps {
	disabled: boolean;
	editValue: string | undefined;
	id: string | undefined;
	label: string | undefined;
	placeholder: string;
	variant: 'standard' | 'filled' | 'outlined' | undefined;
	setter: (value: string | number) => void;
}

const InputText = ({ editValue, disabled, setter, id, label, placeholder, variant }: InputTextProps): JSX.Element => {
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

export default InputText;
