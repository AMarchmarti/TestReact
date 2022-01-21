import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from './contexts/globalContext';
import UserPage from './pages/Users/User';
import theme from './styles/global-styles';

function App() {
	return (
		<>
			<Provider>
				<ThemeProvider {...{ theme }}>
					<CssBaseline />
					<UserPage />
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default App;
