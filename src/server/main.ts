
import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import { getVersion } from '../shared/utils';
import * as path from 'path';
import * as dotenv from 'dotenv';

// TODO: check expected env variables
dotenv.config({path: path.join(__dirname, '..', '.env')});
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const SERVER_PORT = process.env.PORT || '3000';

console.log(`The App version is ${getVersion()}`);

const app = express();

app.use(apiRouter());
app.use(IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}!`);
});
