import { Admission } from 'src/modules/admissions/entities/admission.entity';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { Invoice } from 'src/modules/billing/invoices/entities/invoice.entity';
import { MedicalRecord } from 'src/modules/clinical/medical-records/entities/medical-record.entity';
import { PharmacySale } from 'src/modules/pharmacy-sales/entities/pharmacy-sale.entity';
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

export enum genderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity('patients')
@Index('idx_patient_user', ['user'])
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PharmacySale, (ps) => ps.patient)
  pharmacySales: PharmacySale[];

  @OneToMany(() => MedicalRecord, (mr) => mr.patient)
  medicalRecords: MedicalRecord[];

  @OneToMany(() => Invoice, (invoice) => invoice.patient)
  invoices: Invoice[];

  @Column({ name: 'dob', type: 'date', nullable: true })
  date: Date | null;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: genderEnum,
  })
  gender: genderEnum;

  @Column({
    name: 'address',
    type: 'varchar',
    nullable: true,
  })
  address: string | null;

  @ManyToOne(() => User, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'insurance_number', type: 'varchar', nullable: true })
  insuranceNumber: string | null;

  @OneToMany(() => Admission, (admission) => admission.patient)
  admissions: Admission[];

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

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
