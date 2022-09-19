import express from 'express';
import {v4 as uuidv4 } from 'uuid';

// fake user database for practice
let users = [];
// fake menu database consists of all pizzas
let menu = [{"pizzaID":"76c4b906-0172-43bf-88f8-838ad173f6c1",
"pizzaQuantity":33},
{"pizzaID":"0550cf96-c602-46bb-bc8f-5119a1eddad6",
"pizzaQuantity":55},
{"pizzaID":"ea29a624-047f-4b03-84fe-cca9ae00467d",
"pizzaQuantity":68}];
const router = express.Router();
// return all pizzas in the menu that can be seleted by customers
router.get('/menu', (req, res) => {
    res.send(menu);
});

// return all users' information
router.get('/', (req, res) => {
    res.send(users);
});

// allow user to resiger to the ordering system (add user info to the database)
router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { ...user, userID: uuidv4()};

    users.push(userWithId);
    
    res.send(`New User ${user.name} has been added successfully`); 
});

router.get('/:userID', (req, res) => {
    const userID = req.params.userID;
    const found = users.find((user) => user.userID === userID);
    res.send(found);
});



export default router;