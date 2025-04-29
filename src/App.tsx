import { ThemeProvider } from 'styled-components';
import { ThemeProviderCustom } from './contexts/ThemeProvider';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import AppRoutes from './routes';
import { ComandaProvider } from './contexts/ComandaContext';

function ThemeWrapper() {
	const { isDark } = useTheme();

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<GlobalStyle />
			<AppRoutes />
		</ThemeProvider>
	);
}

export default function App() {
	return (
		<ThemeProviderCustom>
			<ComandaProvider>
				<ThemeWrapper />
			</ComandaProvider>
		</ThemeProviderCustom>
	);
}
