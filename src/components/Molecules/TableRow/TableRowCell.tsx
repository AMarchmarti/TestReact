import { makeStyles } from '@material-ui/core';
import constants from '../../../styles/constants';
import TableCell from '../TableCell/TableCell';

interface TableRowCellsProps {
	row: any[];
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
}

const useStyles = makeStyles({
	titleRow: {
		color: constants.palette.darkGrey,
	},
});

const TableRowCells = ({ row, align }: TableRowCellsProps): any => {
	const classes = useStyles();

	return Object.values(row).map((value: string, index: number) => (
		<TableCell classNameText={classes.titleRow} value={value} key={`row-${index}`} align={align} />
	));
};

export default TableRowCells;
