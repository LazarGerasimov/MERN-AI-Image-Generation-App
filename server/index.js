import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // allows us to pull envs from dotenv file; 

const app = express(); // Creates an Express application
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello from Dall-E');
});

const startServer = async () => {
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
};

startServer();

