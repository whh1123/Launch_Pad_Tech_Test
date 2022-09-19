import express from 'express';
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();
// fake order database for order record
let orders = [];
// fake user database for user record, we can assume user.js and order.js files can access the same database
let users = [{
    "name": "Alice",
    "orderID": [
        "90ce20cb-b8bc-404c-bc00-22839e5cb371"
    ],
    "userID": "c2048496-29b1-4452-a23f-62bda94c5056"
}];

// return all order records
router.get('/', (req, res) => {
    res.send(orders);
});

// allow a user to order a pizza (add new order to the orders)
router.post('/:userID', (req, res) => {
    const userID = req.params.userID;
    const orderID = uuidv4();
    const order = req.body;
    const orderWithId = { ...order, orderID: orderID, userID: userID};
    console.log(users.orderID);
    // users[users.length - 1].orderID.add(orderID);
    orders.push(orderWithId);
    res.send(`New order ${orderWithId.orderID} has been placed successfully by ${orderWithId.userID}`); 
});

router.get('/:orderID', (req, res) => {
    const orderID  = req.params.orderID;
    const orderFound = orders.find((order) => order.orderID === orderID);
    res.send(orderFound);
});

export default router;