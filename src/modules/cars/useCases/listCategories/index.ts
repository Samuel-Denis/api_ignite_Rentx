import { CategoryRepositories } from '../../repositories/implementations/CategoryRepositories';
import { ListCategoriesController } from './ListCategoriesContrller';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoryRepositories = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepositories);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
