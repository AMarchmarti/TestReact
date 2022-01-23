import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import constants from '../../../styles/constants';

const useStyles = makeStyles({
	root: {
		textAlign: 'center',
		color: constants.palette.darkGreen,
	},
});

const Loading = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.root}>
			<CircularProgress />
		</Grid>
	);
};

export default Loading;
