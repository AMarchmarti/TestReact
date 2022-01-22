import * as React from 'react';
import MuiTableCell, { TableCellProps as MuiTableCellProps } from '@material-ui/core/TableCell';

interface TableCellProps extends MuiTableCellProps {
	className?: string | undefined;
	color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
	align?: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
	children: React.ReactNode;
}

const TableCell = ({ className, align, children, ...props }: TableCellProps) => {
	return (
		<MuiTableCell className={className} align={align || 'center'} {...props}>
			{children}
		</MuiTableCell>
	);
};

export default TableCell;
