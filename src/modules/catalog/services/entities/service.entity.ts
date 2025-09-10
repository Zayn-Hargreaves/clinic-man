import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DepartmentService } from '../../mappings/department-services/entities/department-service.entity';

export enum ServiceTypeEnum {
  EXAM = 'exam',
  TEST = 'test',
  PROCEDURE = 'procedure',
  CONSULT = 'consult',
  PACKAGE = 'package',
}

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @OneToMany(() => DepartmentService, (ds) => ds.service)
  departmentServices: DepartmentService[];

  @Column({
    name: 'type',
    type: 'enum',
    enum: ServiceTypeEnum,
    default: ServiceTypeEnum.EXAM,
  })
  type: ServiceTypeEnum;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  price: number;
  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'active', type: 'tinyint', default: 1 })
  active: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deletedBy?: number;
}
