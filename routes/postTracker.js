
import express from "express";
import { trackOrder } from "../controller/upstreamapi.js";
import { getLoggerInstance } from "../logger.js";

export const postTracker = express.Router();
const logger = getLoggerInstance();

// Sample list of orders with order IDs and tracking providers
const orders = [
    { order_id: '13', tracking_provider: 'ups', tracking_number: '1Z4937W56728755212'},
    { order_id: '21', tracking_provider: 'ups', tracking_number: '1Z4937W56728755212' },
    { order_id: '33', tracking_provider: 'ups', tracking_number: '1Z4937W56728755212' },
    { order_id: '1', tracking_provider: 'ups', tracking_number: '1212166j666i6666543' } 
    // runs for tracking information not found as it is not map wiht third party given smaple data
];
postTracker.post('/track/:order_id', async (req, res) => {
    const { order_id } = req.params;

    try {
   
        // Find the order with the matching order_id in the list
        const order = orders.find(o => o.order_id === order_id);

        if (!order) {
            res.status(404).send('Order not found');
            return;
        }

        const tracking_number = order.tracking_number;
        const tracking_provider = order.tracking_provider;
        //const tracking_number = '1Z4937W56728755212'; //fixed one in code

        const response = await trackOrder(tracking_number, tracking_provider)
        if (response.data.status === 'error') {
                // Handle cases where tracking information is not found
                res.status(404).send('Tracking information not found');
        } else {
            console.log(response.data);
            //logger.info(`${response.data}`); with logger
            // Return the tracking information
            var result = {
                order_id: response.data.data.order_id,
                tracking_number: response.data.data.tracking_number,
                tracking_provider: response.data.data.tracking_provider,
                destination: response.data.data.destination_country
            }
            //res.json(result); 
            res.send(result);                   
        }
    } catch (error) {
        //console.error(error);
        logger.error(error)
        res.status(500).send('An error occurred during tracker API execution.');
    }
});


