import { Category } from '../entities/Category';

interface ICreateCtegoryDTO {
    name : string,
    description : string,
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  created({ name, description }: ICreateCtegoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCtegoryDTO };
