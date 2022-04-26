import express from 'express';
import morgan from 'morgan';
import bodyParser  from 'body-parser';
import './db.mjs';
import { AppRouter } from './routes.mjs';


const port = process.env.PORT || 3001;
export const app = express();

app.listen(port);

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(express.static('../client/build'));

app.use('/api', AppRouter);

console.log("App is now listening on " + port);