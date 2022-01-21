import { makeStyles } from '@material-ui/core';
import TableCell from '../TableCell/TableCell';

interface TableTitleProps {
	titles: string[];
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
}

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 'bold',
		marginLeft: '.5em',
		padding: theme.spacing(1),
		textTransform: 'uppercase',
	},
}));

const TableTitle = ({ titles, align }: TableTitleProps): any => {
	const classes = useStyles();
	return titles.map((title: string, index: number) => {
		const key = index;
		return (
			<TableCell
				key={key}
				classNameCell={classes.title}
				align={align}
				color="primary"
				variant="h2"
				value={title}
			/>
		);
	});
};

export default TableTitle;
