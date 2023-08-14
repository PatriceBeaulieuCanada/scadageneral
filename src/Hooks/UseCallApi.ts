import axios, { AxiosResponse } from 'axios';
const querystring = require('querystring');

const UseCallApi=async(param:any) =>{


	/***********************************************Page Touffetage**************************************************/


	if(param.action=='getInfoTuffter') {
        
		const params = {
			date1: param.valeur1,
			date2: param.valeur2
		};
		//console.log("getInfoTuffter ",params)
		try {
			const tuffterInfo = await axios.get('http://localhost:5001/api/Scada/GetTuffterInfo?'+ querystring.stringify(params));
			return tuffterInfo.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}
    }



	/***********************************************Page Users**************************************************/


    if(param.action=='getUserBeaulieu') {
        try {
			const allUser = await axios.get('http://itvxscada:5001/api/Scada/GetAllUsers');		
			return allUser.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }

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