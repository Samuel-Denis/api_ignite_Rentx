import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import { ICreateCtegoryDTO, ICategoryRepository } from '../ICategoryRepository';

class CategoryRepositories implements ICategoryRepository {
  private repository : Repository<Category>

  constructor() {
    this.repository = getRepository(Category);
  }

  async created({ name, description }: ICreateCtegoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }
  async findByName(name: string) : Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepositories };
