import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IImportCategory{
    name: string,
    description: string,
}
class ImportCategoryUseCase {
  constructor(private categoryRepositories: ICategoryRepository) {

  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadingCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepositories.findByName(name);

      if (!categoryAlreadyExists) {
        this.categoryRepositories.created({ name, description });
      }
    });
  }

  loadingCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile.on('data', async (line) => {
        const [name, description] = line;

        categories.push({ name, description });
      })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
}

export { ImportCategoryUseCase };
