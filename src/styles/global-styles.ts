import { createTheme } from '@material-ui/core/styles';
import constants from './constants';

const theme = createTheme({
	typography: {
		h1: {
			color: constants.palette.darkGreen,
			fontWeight: 'bold',
			fontSize: constants.typography.size.xl,
			textTransform: 'uppercase',
		},
		h2: {
			color: constants.palette.darkGreen,
			fontWeight: 'bold',
			fontSize: constants.typography.size.md,
			textTransform: 'uppercase',
			padding: '.5rem',
		},
		h3: {
			color: constants.palette.darkGrey,
			fontWeight: 'bold',
			fontSize: constants.typography.size.md,
			textTransform: 'uppercase',
		},
		button: {
			color: constants.palette.white,
			fontSize: constants.typography.size.md,
		},
	},
	overrides: {
		MuiPaper: {
			root: {
				border: constants.border.main,
			},
			elevation1: {
				boxShadow: constants.boxShadow.main,
			},
		},
		MuiTable: {
			root: {
				border: 'none',
				backgroundColor: constants.tableBackground.main,
			},
		},
		MuiTypography: {
			root: {
				color: constants.palette.darkGrey,
				fontFamily: constants.fontFamily,
				fontSize: constants.typography.size.sm,
			},
		},
		MuiButton: {
			root: {
				fontSize: constants.typography.size.md,
				padding: 12,
				minHeight: 48,
				textTransform: 'none',
				fontWeight: 'bold',
			},
			containedPrimary: {
				color: constants.palette.white,
				backgroundColor: constants.palette.darkGreen,
				'&:hover': {
					backgroundColor: constants.palette.darkGreen,
					opacity: '0.8',
				},
			},
			textSecondary: {
				color: constants.palette.darkGreen,
				backgroundColor: 'none',
				'&:hover': {
					backgroundColor: constants.palette.lighterGrey,
					opacity: '0.8',
				},
			},
		},
	},
	palette: {
		primary: {
			light: '#757ce8',
			main: constants.palette.darkGreen,
			dark: '#002884',
			contrastText: constants.palette.white,
		},
		secondary: {
			light: '#ff7961',
			main: constants.palette.lighterGreen,
			dark: '#ba000d',
			contrastText: constants.palette.black,
		},
		background: { default: constants.palette.lighterGrey },
	},
});

export default theme;
