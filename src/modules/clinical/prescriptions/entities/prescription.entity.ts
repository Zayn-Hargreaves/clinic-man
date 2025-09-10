import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalRecord } from '../../medical-records/entities/medical-record.entity';
import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';

@Entity('prescriptions')
@Index('idx_prescription_medical_record_id', ['medicalRecord'])
@Index('idx_prescription_doctor_id', ['doctor'])
export class Prescription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalRecord, { nullable: false })
  @JoinColumn({ name: 'medical_record_id' })
  medicalRecord: MedicalRecord;

  @ManyToOne(() => Doctor, { nullable: true })
  @JoinColumn({ name: 'prescribed_by' })
  doctor?: Doctor;

  @Column({
    name: 'prescribed_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  precribedDate: Date;

  @Column({ name: 'notes', type: 'text', nullable: false })
  notes: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deletedBy?: number;
}
