import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiTableCell from '@material-ui/core/TableCell';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TableCellProps {
	classNameCell?: string | undefined;
	classNameText?: string | undefined;
	value: string | number | undefined;
	color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
	variant?: 'inherit' | Variant | undefined;
	align?: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
}

const TableCell = ({ classNameCell, classNameText, value, color, variant, align }: TableCellProps) => {
	return (
		<MuiTableCell className={classNameCell} align={align || 'center'}>
			<Typography className={classNameText} color={color} variant={variant}>
				{value}
			</Typography>
		</MuiTableCell>
	);
};

export default TableCell;
