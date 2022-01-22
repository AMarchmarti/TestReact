import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import constants from '../../../styles/constants';
import TableCell from '../../Atoms/TableCell/TableCell';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 500,
	},
	head: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
		textAlign: 'center',
	},
	titleRow: {
		color: constants.palette.darkGrey,
	},
	title: {
		fontWeight: 'bold',
		marginLeft: '.5em',
		padding: theme.spacing(1),
		textTransform: 'uppercase',
	},
}));

interface TableProps {
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
	alignRow?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;

	componentToSelectRows?: JSX.Element;

	headerRows: string[];

	rows: any[];
}

interface TableRowCellsProps {
	row: any[];
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
}

interface TableTitleProps {
	titles: string[];
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
}

const TableRowCells = ({ row, align }: TableRowCellsProps): any => {
	const classes = useStyles();

	return Object.values(row).map((value: string, index: number) => (
		<TableCell key={`row-${index}`} align={align}>
			<Typography className={classes.titleRow}>{value}</Typography>
		</TableCell>
	));
};

const TableTitle = ({ titles, align }: TableTitleProps): any => {
	const classes = useStyles();
	return titles.map((title: string, index: number) => {
		const key = index;
		return (
			<TableCell key={key} className={classes.title} align={align} color="primary">
				<Typography color="primary" variant="h2">
					{title}
				</Typography>
			</TableCell>
		);
	});
};

{
	/* <Typography className={classNameText} color={color} variant={variant}>
	{value}
</Typography>; */
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
