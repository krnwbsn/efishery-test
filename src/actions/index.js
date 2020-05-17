import axios from 'axios';
import { SERVICES } from '../configs';

export const getData = async ({ dispatch }) => {
	try {
		const response = await axios.get(`${SERVICES.GET_DATA}`);
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
};

export const getArea = async ({ dispatch }) => {
	try {
		const response = await axios.get(`${SERVICES.GET_AREA}`);
		const area = response.data;
		area.forEach((item, index) => {
			dispatch({
				type: 'ADD_AREA',
				data: {
					area_id: index,
					province: item.province,
					city: item.city
				}
			})
		});
	} catch (e) {
		console.error(e);
	}
};

export const getSize = async ({ dispatch }) => {
	try {
		const response = await axios.get(`${SERVICES.GET_SIZE}`);
		const data = response.data;
		
		data.forEach((item, index) => {
			dispatch({
				type: 'ADD_SIZE',
				data: {
					size_id: index,
					size: item.size
				}
			})
		});
	} catch (e) {
		console.error(e);
	}
};
