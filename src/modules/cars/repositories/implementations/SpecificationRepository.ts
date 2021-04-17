import { Specification } from '../../entities/Specification';
import { ICreatedSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
    private specification: Specification[];

private static INSTANCE: SpecificationRepository;

constructor() {
  this.specification = [];
}

public static getInstance(): SpecificationRepository {
  if (!SpecificationRepository.INSTANCE) {
    SpecificationRepository.INSTANCE = new SpecificationRepository();
  }
  return SpecificationRepository.INSTANCE;
}

created({ description, name }: ICreatedSpecificationDTO): void {
  const specification = new Specification();

  Object.assign(specification, {
    name,
    description,
    created_at: new Date(),
  });

  this.specification.push(specification);
}

findByName(name:string): Specification {
  const specification = this.specification.find((specification) => specification.name === name);

  return specification;
}
}

export { SpecificationRepository };
