import axios from 'axios';

// export const getData = async ({ dispatch }) => {
// 	try {
// 		const response = await axios.get(`${API_URL}/list`);
// 		const data = response.data;
		
// 		data.forEach(item => {
// 			dispatch({
// 				type: 'GET_DATA',
// 				data: {
// 					id: item.uuid,
// 					komoditas: item.komoditas,
// 					area_provinsi: item.area_provinsi,
// 					area_kota: item.area_kota,
// 					size: item.size,
// 					price: item.price,
// 					tgl_parsed: item.tgl_parsed,
// 					timestamp: item.timestamp,
// 					isEdit: false
// 				},
// 			})
// 		});
// 	} catch (e) {
// 		console.error(e);
// 	}
// }

export default function fetch(options) {
	return new Promise((resolve, reject) => {
		axios(options)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				const defaultError = {
					code: 500,
					status: 'error',
					message: 'Failed to fetch data.'
				};

				if (typeof err.response === 'undefined') reject(defaultError);
				else if (typeof err.response.data === 'undefined') reject(defaultError);
				else reject(err.response.data);
			});
	});
};
