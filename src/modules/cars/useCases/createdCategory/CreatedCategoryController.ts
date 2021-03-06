import { Request, Response } from 'express';

import { CreatedCategoryUseCase } from './CreateCategoryUseCase';

class CreatedCategoryController {
  constructor(private createCategoryUseCase: CreatedCategoryUseCase) {}
  async handle(req : Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    await this.createCategoryUseCase.execute({ name, description });

    return res.status(201).send();
  }
} export { CreatedCategoryController };
