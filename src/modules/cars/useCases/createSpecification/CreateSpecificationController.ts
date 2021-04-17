import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private cresateSpecificationUseCase: CreateSpecificationUseCase) {}
  handler(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.cresateSpecificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
