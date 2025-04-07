import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  category_id: number;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @property({
    type: 'number',
    default: null,
  })
  isbn?: number;


  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
