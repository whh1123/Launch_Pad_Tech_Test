import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import orderRoutes from './routes/order.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => res.send('Hello from the home page'));

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));

