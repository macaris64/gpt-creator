import dotenv from 'dotenv';
import express from 'express';
import gptRouter from './routes/gpt.route';
import {errorHandler} from "./middlewares/error.middleware";

import sequelize from "./utils/sequelize";
import {initGptModel} from "./models/gpt.model";

initGptModel(sequelize);

const app = express();
const port = 3000; // You can choose any port

dotenv.config();
app.use(express.json());
app.use('/api', gptRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.query('CREATE TABLE IF NOT EXISTS test_table (id SERIAL PRIMARY KEY, test_column VARCHAR(100));');
    })
    .then(() => {
        console.log('Test table created');
        return sequelize.query('DROP TABLE IF EXISTS test_table;')
    })
    .catch(err => console.error('Unable to connect to the database:', err));


sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
        console.log(`Server is running port ${port}`);
    });
})
