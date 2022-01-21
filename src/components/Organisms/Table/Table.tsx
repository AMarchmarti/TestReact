import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TablePaginationActions from '../TableActions/TableActions';
import TableTitle from '../../Molecules/TableTitle/TableTitle';
import TableRowCells from '../../Molecules/TableRow/TableRowCell';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 500,
	},
	head: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
		textAlign: 'center',
	},
}));

interface TableProps {
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
	alignRow?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;

	componentToSelectRows?: JSX.Element;

	headerRows: string[];

	rows: any[];
}

const Table = ({ align, alignRow, componentToSelectRows, headerRows, rows }: TableProps): JSX.Element => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<MuiTable className={classes.table} aria-label="custom pagination table">
				<TableHead className={classes.head}>
					<TableRow>
						<TableTitle titles={headerRows} align={align} />
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row: any, indexRow: number) => (
						<TableRow key={indexRow}>
							<TableRowCells align={alignRow} row={row} />
						</TableRow>
					))}
				</TableBody>
				<TableFooter>{componentToSelectRows}</TableFooter>
			</MuiTable>
		</TableContainer>
	);
};

export default Table;
