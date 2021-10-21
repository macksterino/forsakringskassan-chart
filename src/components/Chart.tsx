import { Box, Typography } from '@mui/material';
import React from 'react';
import { API, APIOptions, ChartInfo } from '../api';

export const Chart: React.FC<APIOptions> = ({ limit }) => {
	const [chartData, setChartData] = React.useState<Array<ChartInfo>>([]);

	React.useEffect(() => {
		async function loadAPI() {
			const api = new API({ limit: limit });
			setChartData(await api.fetch());
		}

		loadAPI();
	}, [limit]);

	let previousCountry: string = "";
	const countries = chartData.map(data => {
		if (data.countryCode !== previousCountry) {
			previousCountry = data.countryCode;
			return (
				<Typography key={data.countryCode + data.gender} component="h5" variant="h5" margin="0 45px">
					{data.countryCode}
				</Typography>
			);
		}

		return null;
	});

	const valuesArr: Array<number> = [];
	let currentValue: number = 0;
	for (let i = 0; i < 30; i++) {
		valuesArr.push(currentValue += 10);
	}

	const values = valuesArr.reverse().map((value, index) => {
		return (
			<Typography key={index} component="h5" variant="h5" padding="2px" margin="0 5px">
				{value}
			</Typography>
		);
	});

	const calculateColumnData = (maxValue: number) => {
		let columnBlocks: number = 0;
		for (let i = 0; i < maxValue; i++) {
			if (columnBlocks >= maxValue) {
				return i;
			}

			columnBlocks += 10;
		}

		return 1;
	}

	const columns = chartData.map((data, index) => {
		const colsMale: Array<any> = [];
		const colsFemale: Array<any> = [];

		const blocks = calculateColumnData(data.value);
		for (let i = 0; i < blocks; i++) {
			if (data.gender === "Male") {
				colsMale.push(
					(
						<Box key={data.gender + i} bgcolor="blue" width="30px" height="30px" margin="2px 30px 2px 0px" />
					)
				);
			}
			else {
				colsFemale.push(
					(
						<Box key={data.gender + i} bgcolor="pink" width="30px" height="30px" margin="2px 0px 2px 30px" />
					)
				);
			}
		}

		return (
			<Box key={data.countryCode + index} display="flex" flexDirection="row" margin="2px">
				<Box key={data.countryCode + data.gender + index} display="flex" flexDirection="column-reverse">
					{colsMale}{colsFemale}
				</Box>
			</Box>
		);
	});

	return (
		<Box display="flex" flexDirection="row" justifyContent="center">
			<Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
				{values}
			</Box>
			<Box display="flex" flexDirection="column-reverse">
				<Box display="flex" flexDirection="row" justifyContent="space-between">
					{countries}
				</Box>
				<Box display="flex" flexDirection="row" justifyContent="flex-start" borderLeft="1px solid gray" borderBottom="1px solid gray" height="1060px">
					{columns}
				</Box>
			</Box>
		</Box>
	);
}
