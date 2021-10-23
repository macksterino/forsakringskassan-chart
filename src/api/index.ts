import axios from 'axios';

export type ChartInfo = {
	countryCode: string,
	gender: string,
	value: number
}

export class API {
	private readonly results: Array<ChartInfo>;

	constructor() {
		this.results = [];
	}

	public async fetch(): Promise<Array<ChartInfo>> {
		const url = "https://cors-anywhere.herokuapp.com/https://www.forsakringskassan.se/fk_apps/MEKAREST/public/v1/iv-planerad/IVplaneradvardland.json";
		const request = await axios.get(url, { method: "GET" });
		const response = await request.data;

		const filteredResponse = this.filter(response as any);

		filteredResponse.map(item => {
			return this.results.push({
				countryCode: item.dimensions.vardland_kod,
				gender: (item.dimensions.kon_kod === 'M') ? 'Male' : 'Female',
				value: item.observations.antal.value
			});
		});

		return this.results;
	}

	private filter(objs: Array<any>): Array<any> {
		return objs.filter(item => {
			const value = item.observations.antal.value;
			const countryCode = item.dimensions.vardland_kod;
			const gender = item.dimensions.kon_kod;

			return (value > 3 && countryCode !== "ALL" && gender !== "ALL");
		});
	}
}
