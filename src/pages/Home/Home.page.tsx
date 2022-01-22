import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TabPanel from '../../components/Molecules/TabPanel/TabPanel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import DescriptionIcon from '@material-ui/icons/Description';
import UserPage from '../../components/Organisms/Users/User.page';
import PostsPage from '../../components/Organisms/Posts/Posts.page';
import AlbumsPage from '../../components/Organisms/Albums/Albums.page';

export interface TabProps {
	label: string;
	icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
}

export interface PanelProps {
	component: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

const HomePage = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const tabs: TabProps[] = [
		{ label: 'Users', icon: <AccountCircleIcon /> },
		{ label: 'Posts', icon: <DescriptionIcon /> },
		{ label: 'Albums', icon: <PhotoAlbumIcon /> },
	];

	const panels: PanelProps[] = [
		{ component: <UserPage /> },
		{ component: <PostsPage /> },
		{ component: <AlbumsPage /> },
	];
	return (
		<div className={classes.root}>
			<TabPanel tabs={tabs} panels={panels} handleChange={handleChange} value={value} />
		</div>
	);
};

export default HomePage;
