import axios, { AxiosResponse } from 'axios';
const querystring = require('querystring');

const UseCallApi=async(param:any) =>{

    // if(param.action=='GetAllHumainReason') {
    //     try {
	// 		const listHumainReason = await axios.get('http://itvxscada:5001/api/StopReason/GetAllHumainReason');		
	// 		return listHumainReason.data;
	// 	} catch (err) {
	// 		// Handle Error Here
	// 		console.error(err);
	// 		return [];
	// 	}        
    // }

	// if(param.action=='GetAllReducedSpeed') {
    //     try {
	// 		const listReducedSpeed = await axios.get('http://itvxscada:5001/api/StopReason/GetAllReducedSpeed');		
	// 		return listReducedSpeed.data;
	// 	} catch (err) {
	// 		// Handle Error Here
	// 		console.error(err);
	// 		return [];
	// 	}        
    // }
	
	// if(param.action=='AddStopReason') {

	// 	const config = { headers: { 'Content-Type': 'application/json' } };
	// 	//console.log(param)
		
	// 	const params ={
	// 		id : param.humainstopreason.id
	// 	}

    //     try {
	// 		const serialReason =axios.post('http://itvxscada:5001/api/StopReason/AddStopReason?'+querystring.stringify(params));		
	// 		return (await serialReason).data;
	// 	} catch (err) {
	// 		// Handle Error Here
	// 		console.error(err);
	// 		return [];
	// 	}        
    // }
	
	

}

export default UseCallApi;