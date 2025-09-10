import { Admission } from 'src/modules/admissions/entities/admission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bed } from '../../beds/entities/bed.entity';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { Department } from 'src/modules/directory/departments/entities/department.entity';
import { Examtable } from '../../examtables/entities/examtable.entity';

export enum roomTypeEnum {
  EXAM = 'exam',
  INPATIENT = 'inpatient',
  PROCEDURE = 'procedure',
  CONSULT = 'consult',
}

@Entity('rooms')
@Index('idx_room_department_roomNumber', ['departments', 'roomNumber'])
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Examtable, (et) => et.room)
  examTables: Examtable[];

  @Column({ name: 'room_number', type: 'varchar', length: 20, nullable: true })
  roomNumber: string | null;

  @Column({ name: 'room_type', type: 'enum', enum: roomTypeEnum })
  roomType: roomTypeEnum;

  @Column({ name: 'capacity', type: 'int', default: 1 })
  capacity: number;

  @OneToMany(() => Appointment, (appointment) => appointment.room)
  appointments: Appointment[];

  @OneToMany(() => Bed, (bed) => bed.room)
  beds: Bed[];

  @OneToMany(() => Admission, (admission) => admission.room)
  admissions: Admission[];

  @ManyToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'department_id' })
  departments?: Department;

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
