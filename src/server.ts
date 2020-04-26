import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import './database';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🚀`);
});
