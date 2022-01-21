import { makeStyles, Theme, useTheme } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import IconButton from '../../Atoms/IconButton/IconButton';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2),
	},
}));

interface TablePaginationActionsProps {
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const TablePaginationActions = (props: TablePaginationActionsProps) => {
	const classes = useStyles();
	const theme: Theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	const IconComponent = (direction: string, icon: JSX.Element, secondIcon: JSX.Element): JSX.Element =>
		theme.direction === direction ? icon : secondIcon;

	return (
		<div className={classes.root}>
			<IconButton
				handleClick={handleFirstPageButtonClick}
				disabled={page === 0}
				ariaLabel="first page"
				icon={IconComponent('rtl', <LastPageIcon />, <FirstPageIcon />)}
			/>
			<IconButton
				handleClick={handleBackButtonClick}
				disabled={page === 0}
				ariaLabel="previous page"
				icon={IconComponent('rtl', <KeyboardArrowRight />, <KeyboardArrowLeft />)}
			/>
			<IconButton
				handleClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				ariaLabel="next page"
				icon={IconComponent('rtl', <KeyboardArrowLeft />, <KeyboardArrowRight />)}
			/>
			<IconButton
				handleClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				ariaLabel="last page"
				icon={IconComponent('rtl', <FirstPageIcon />, <LastPageIcon />)}
			/>
		</div>
	);
};

export default TablePaginationActions;
