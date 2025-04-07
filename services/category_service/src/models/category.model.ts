import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  category_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @property({
    type: 'number',
    required: true,
  })
  isbn: number;


  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
