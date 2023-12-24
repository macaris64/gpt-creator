import express from 'express';
import gptRouter from './routes/gpt.route';
import {errorHandler} from "./middlewares/error.middleware";

const app = express();
const port = 3000; // You can choose any port

app.use(express.json());
app.use('/api', gptRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
