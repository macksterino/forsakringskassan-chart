import { Box, createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Chart, ThemeHandler } from './components';

function App() {
	const [darkMode, setDarkMode] = React.useState<boolean>(false);
	const theme = createTheme(
		{
			palette: {
				mode: darkMode ? "dark" : "light"
			}
		}
	);

	return (
		<ThemeProvider theme={theme}>
			<ScopedCssBaseline>
				<Box height="100vh">
					<ThemeHandler darkMode={darkMode} setDarkMode={setDarkMode} />
					<Chart />
				</Box>
			</ScopedCssBaseline>
		</ThemeProvider>
	);
}

export default App;
