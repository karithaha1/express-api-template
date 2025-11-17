import express from 'express';
import routes from './routes/index.js';
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());


app.use("/uploads", express.static("uploads"));
app.use('/api', routes);

export default app;
