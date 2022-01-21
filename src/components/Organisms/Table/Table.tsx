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
	headerRows: string[];
	rows: any[];
	labelRowsPerPage?:
		| ((value: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) => JSX.Element)
		| undefined;
	rowsPerPageOptions: number[];
	colSpan?: number;
	initialRowsPerPage: number;
}

const Table = ({
	headerRows,
	rows,
	labelRowsPerPage,
	rowsPerPageOptions,
	colSpan,
	initialRowsPerPage,
}: TableProps): JSX.Element => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const defaultLabel = () => !!labelRowsPerPage && labelRowsPerPage(handleChangeRowsPerPage);
	return (
		<TableContainer component={Paper}>
			<MuiTable className={classes.table} aria-label="custom pagination table">
				<TableHead className={classes.head}>
					<TableRow>
						<TableTitle titles={headerRows} />
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
						(row: any, indexRow: number) => (
							<TableRow key={indexRow}>
								<TableRowCells row={row} />
							</TableRow>
						)
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={rowsPerPageOptions}
							colSpan={colSpan}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							labelRowsPerPage={defaultLabel}
							onPageChange={handleChangePage}
							onRowsPerPageChange={() => !labelRowsPerPage && handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</MuiTable>
		</TableContainer>
	);
};

export default Table;
