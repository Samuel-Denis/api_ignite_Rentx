import { Router } from 'express';
import { autheticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { rentalRoutes } from './rental.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { passwordRoutes } from './password.routes';

const router = Router();


router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use("/password", passwordRoutes);
router.use(autheticateRoutes);



export { router };
