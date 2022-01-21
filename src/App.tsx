import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from './contexts/globalContext';
import UserPage from './pages/Users/User.page';
import PostsPage from './pages/Posts/Posts.page';
import theme from './styles/global-styles';
import AlbumsPage from './pages/Albums/Albums.page';

function App() {
	return (
		<>
			<Provider>
				<ThemeProvider {...{ theme }}>
					<CssBaseline />
					<UserPage />
					<PostsPage />
					<AlbumsPage />
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default App;
