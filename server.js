import app from './src/app.js';
import dotenv from 'dotenv';
import { checkDatabaseConnection } from './src/config/db.js';


dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    await checkDatabaseConnection();
    console.log(`Server running on port ${port}`);
});
