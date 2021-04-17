import { Specification } from '../entities/Specification';

interface ICreatedSpecificationDTO{
    name:string,
    description: string
}

interface ISpecificationRepository{
    created({ description, name }:ICreatedSpecificationDTO): void,
    findByName(name: string): Specification
}

export { ISpecificationRepository, ICreatedSpecificationDTO };
