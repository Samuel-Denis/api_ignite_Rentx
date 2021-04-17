import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IRequest{
    name: string,
    description: string,
}
class CreatedCategoryUseCase {
  constructor(private categoryRepositories: ICategoryRepository) {

  }
  async execute({ name, description } : IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepositories.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    this.categoryRepositories.created({ name, description });
  }
}

export { CreatedCategoryUseCase };
