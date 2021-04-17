import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoryRepositories: ICategoryRepository) {

  }
  execute(): Category[] {
    const categories = this.categoryRepositories.list();

    return null;
  }
}
export { ListCategoriesUseCase };
