import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from './contexts/globalContext';

import theme from './styles/global-styles';
import HomePage from './pages/Home/Home.page';

function App() {
	return (
		<>
			<Provider>
				<ThemeProvider {...{ theme }}>
					<CssBaseline />

					<HomePage />
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default App;
