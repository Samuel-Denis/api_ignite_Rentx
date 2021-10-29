import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { router } from '@shared/infra/http/routes';
import swaggerFile from './swagger.json';

import './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333);
