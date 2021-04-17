import { CategoryRepositories } from '../../repositories/implementations/CategoryRepositories';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepositories = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepositories);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
