import { Router } from 'express';

import { createdCategoryController } from '../modules/cars/useCases/createdCategory';

const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) => createdCategoryController.handle(req, res));

export { specificationRoutes };
