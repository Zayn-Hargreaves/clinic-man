import { Service } from 'src/modules/catalog/services/entities/service.entity';
import { Department } from 'src/modules/directory/departments/entities/department.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('department_services')
@Index('idx_department_service', ['department', 'service'])
export class DepartmentService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => Service, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
}
