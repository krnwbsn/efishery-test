import axios from 'axios';

const API_URL = "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4"

export const getData = async ({ dispatch }) => {
	try {
		const response = await axios.get(`${API_URL}/list`);
		const data = response.data;
		
		data.forEach(item => {
			dispatch({
				type: 'ADD_DATA',
				data: {
					id: item.uuid,
					komoditas: item.komoditas,
					area_provinsi: item.area_provinsi,
					area_kota: item.area_kota,
					size: item.size,
					price: item.price,
					tgl_parsed: item.tgl_parsed,
					timestamp: item.timestamp,
					isEdit: false
				}
			})
		});
	} catch (e) {
		console.error(e);
	}
}