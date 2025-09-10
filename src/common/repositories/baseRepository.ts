// src/common/repositories/base.repository.ts
import {
  Repository,
  DataSource,
  EntityTarget,
  DeepPartial,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

/**
 * T: Entity (phải là ObjectLiteral theo TypeORM)
 * PK: tên trường khóa chính trong entity, mặc định 'id'
 */
@Injectable()
export class BaseRepository<
  T extends ObjectLiteral,
  PK extends keyof T = 'id',
> extends Repository<T> {
  constructor(
    target: EntityTarget<T>,
    dataSource: DataSource,
    private readonly pk: PK = 'id' as PK,
  ) {
    super(target, dataSource.createEntityManager());
  }

  async findByPk(id: T[PK]): Promise<T | null> {
    const where = { [this.pk]: id } as FindOptionsWhere<T>;
    return this.findOne({ where });
  }

  async findAll(skip = 0, take = 10): Promise<[T[], number]> {
    return this.findAndCount({ skip, take });
  }

  async createEntity(data: DeepPartial<T>): Promise<T> {
    const entity = this.create(data);
    return this.save(entity);
  }

  async updateById(id: T[PK], data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findByPk(id);
    if (!entity) return null;
    Object.assign(entity, data);
    return this.save(entity);
  }

  async deleteById(id: T[PK]): Promise<boolean> {
    const where = { [this.pk]: id } as FindOptionsWhere<T>;
    const res = await this.delete(where);
    return !!res.affected;
  }
}
