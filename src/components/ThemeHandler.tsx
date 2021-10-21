import { Box, Switch } from '@mui/material';
import React from 'react';

type ThemeHandlerProps = {
	darkMode: boolean,
	setDarkMode: (darkMode: boolean) => void
}

export const ThemeHandler: React.FC<ThemeHandlerProps> = ({ darkMode, setDarkMode }) => {
	const handleModeChange = () => {
		setDarkMode(!darkMode);
	}

	return (
		<Box display="flex" flexDirection="row" justifyContent="flex-end" padding="10px">
			<Switch
				checked={darkMode}
				onChange={handleModeChange}
				color="default"
				title={`switch to ${(darkMode === false) ? "dark mode" : "light mode"}`}
				name="theme toggler"
			/>
		</Box>
	);
}
