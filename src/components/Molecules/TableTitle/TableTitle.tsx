import { makeStyles } from '@material-ui/core';
import TableCell from '../TableCell/TableCell';

interface TableTitleProps {
	titles: string[];
}

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 'bold',
		marginLeft: '.5em',
		padding: theme.spacing(1),
		textTransform: 'uppercase',
	},
}));

const TableTitle = ({ titles }: TableTitleProps): any => {
	const classes = useStyles();
	return titles.map((title: string, index: number) => {
		const key = index;
		return <TableCell key={key} classNameCell={classes.title} color="primary" variant="h2" value={title} />;
	});
};

export default TableTitle;