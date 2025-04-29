import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { lightTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
