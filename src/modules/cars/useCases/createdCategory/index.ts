import { CategoryRepositories } from '../../repositories/implementations/CategoryRepositories';
import { CreatedCategoryUseCase } from './CreateCategoryUseCase';
import { CreatedCategoryController } from './CreatedCategoryController';

export default (): CreatedCategoryController => {
  const categoryRepositories = new CategoryRepositories();
  const createCategoryUseCase = new CreatedCategoryUseCase(categoryRepositories);
  const createdCategoryController = new CreatedCategoryController(createCategoryUseCase);

  return createdCategoryController;
};
