import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import AppRoutes from './routes';

function App() {
	const [isDark, setIsDark] = useState(false);
	const toggleTheme = () => setIsDark((prev) => !prev);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<GlobalStyle />
			<button onClick={toggleTheme}>Toggle {isDark ? 'Light' : 'Dark'} Theme</button>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
