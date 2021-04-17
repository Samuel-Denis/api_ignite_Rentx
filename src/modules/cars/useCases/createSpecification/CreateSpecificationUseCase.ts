import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest{
  name: string,
  description: string
}
class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description } : IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('SpecificationAlreadyExists');
    }
    this.specificationRepository.created({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
