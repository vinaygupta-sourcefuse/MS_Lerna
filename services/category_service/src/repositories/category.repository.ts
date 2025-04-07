import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CategoryDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.category_id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.category') dataSource: CategoryDataSource,
  ) {
    super(Category, dataSource);
  }
}
