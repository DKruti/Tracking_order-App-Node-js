import axios from 'axios'
import { getLoggerInstance } from '../logger.js';

const logger = getLoggerInstance()

export const trackOrder = async (tracking_number, tracking_provider) =>{
    try{

        const apikey = process.env.apikey;
        const app_name = process.env.app_name;
        
                // Call the tracking API with the order-specific tracking provider
                const options = {
                    method: 'POST',
                    url: 'https://my.trackship.com/api/shipment/get/',
                    params: {
                        'tracking_number': tracking_number,
                        'tracking_provider': tracking_provider
                    },
                    headers: {
                        'app-name': app_name,
                        'trackship-api-key': apikey,
                        'Content-Type': 'application/json'
                    }
                };
        
        const response = await axios.post(options.url, options.params, {
            headers: options.headers
        });
        return response;
    }catch (error) {
        logger.error(error)
        //console.error(error);   
    }
    
}
