import { Admission } from 'src/modules/admissions/entities/admission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { Room } from 'src/modules/facility/rooms/entities/room.entity';
import { DepartmentService } from 'src/modules/catalog/mappings/department-services/entities/department-service.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @OneToMany(
    () => DepartmentService,
    (departmentService) => departmentService.department,
  )
  departmentService: DepartmentService[];

  @OneToMany(() => Admission, (admission) => admission.department)
  admissions: Admission[];

  @OneToMany(() => Doctor, (doctor) => doctor.department)
  doctors: Doctor[];

  @OneToMany(() => Room, (room) => room.departments)
  rooms: Room[];

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
