import { User } from 'src/modules/users/entities/user.entity';
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
import { Department } from '../../departments/entities/department.entity';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { MedicalRecord } from 'src/modules/clinical/medical-records/entities/medical-record.entity';
import { DoctorService } from 'src/modules/catalog/mappings/doctor-services/entities/doctor-service.entity';
import { Prescription } from 'src/modules/clinical/prescriptions/entities/prescription.entity';
import { DoctorSchedule } from 'src/modules/scheduling/doctor-schedules/entities/doctor-schedule.entity';

@Entity('doctors')
@Index('idx_doctors_user', ['user'])
@Index('idx_doctors_department', ['department'])
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => DoctorSchedule, (ds) => ds.doctor)
  doctors: Doctor[];

  @OneToMany(() => Prescription, (prescription) => prescription.doctor)
  prescriptions: Prescription[];

  @OneToMany(() => DoctorService, (ds) => ds.doctor)
  doctorServices: DoctorService[];

  @OneToMany(() => MedicalRecord, (mr) => mr.doctor)
  medicalRecords: MedicalRecord[];

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'department_id' })
  department?: Department;

  @Column({ name: 'title', type: 'varchar', length: 50, nullable: true })
  title: string | null;

  @Column({
    name: 'specialization',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  specialization: string | null;

  @Column({ name: 'age', type: 'int', nullable: true })
  experienceYears: Date | null;

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
