import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use('/api', routes);

export default app;
